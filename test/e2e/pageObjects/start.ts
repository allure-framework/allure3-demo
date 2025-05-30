import { Page } from "@playwright/test";
import { PageObject } from "./common.js";

export enum OptionDescriptorType {
  Select,
  InlinePicker,
}

export type SelectOptionDescriptor = {
  type: OptionDescriptorType.Select;
  selectId: string;
  text: string;
};

export type InlinePickerOptionDescriptor = {
  type: OptionDescriptorType.InlinePicker;
  text: string;
};

export type DataSet = (SelectOptionDescriptor | InlinePickerOptionDescriptor)[];

const cartesianMap = <T>(arrays: T[][]): T[][] => {
  const result: T[][] = [];
  const normalizedArrays = arrays.filter((array) => array.length > 0);

  if (normalizedArrays.length === 0) {
    return [];
  }

  if (normalizedArrays.length === 1) {
    return normalizedArrays[0].map((item) => [item]);
  }

  const generateCombination = (current: T[], index: number) => {
    if (index === normalizedArrays.length) {
      result.push(current);
      return;
    }

    for (const item of normalizedArrays[index]) {
      generateCombination([...current, item], index + 1);
    }
  };

  generateCombination([], 0);

  return result;
};

export class StartPage extends PageObject {
  constructor(props) {
    super(props);
  }

  async getTestDataSets(page: Page) {
    const metadataSections = await page.locator('[title="Project metadata"] label[id]').all();
    const metadataOptions: (SelectOptionDescriptor | InlinePickerOptionDescriptor)[][] = [];

    for (const metadataSection of metadataSections) {
      const metadataSelects = await metadataSection.locator("[data-testid=app-start-select]").all();
      const metadataInlinePickers = await metadataSection.locator("[data-testid=app-start-inline-picker]").all();

      if (metadataSelects.length === 0 && metadataInlinePickers.length === 0) {
        continue;
      }

      const metadataSelectsOptions: SelectOptionDescriptor[][] = await Promise.all(
        metadataSelects.map(async (metadataSelect) => {
          const selectId = (await metadataSelect.getAttribute("id")) ?? "";
          const options = await metadataSelect.locator("option").all();

          return Promise.all(
            options.map(async (option) => {
              const text = (await option.textContent()) ?? "";

              return {
                type: OptionDescriptorType.Select,
                selectId,
                text,
              };
            }),
          );
        }),
      );
      const metadataInlinePickersOptions: InlinePickerOptionDescriptor[][] = await Promise.all(
        metadataInlinePickers.map(async (metadataInlinePicker) => {
          const options = await metadataInlinePicker.locator("li").all();

          return Promise.all(
            options.map(async (option) => {
              const text = (await option.locator("label").textContent()) ?? "";

              return {
                type: OptionDescriptorType.InlinePicker,
                text,
              };
            }),
          );
        }),
      );

      metadataOptions.push(metadataSelectsOptions.flat());
      metadataOptions.push(metadataInlinePickersOptions.flat());
    }

    return cartesianMap(metadataOptions);
  }


  async checkTestDataSets(payload: { dataSets: DataSet[]; framework: string }) {
    const { dataSets, framework } = payload;

    for (const dataSet of dataSets) {
      for (const option of dataSet) {
        switch (option.type) {
          case OptionDescriptorType.Select:
            await this.page.selectOption(`#${option.selectId}`, { label: option.text });
            break;
          case OptionDescriptorType.InlinePicker:
            await this.page.getByText(option.text, { exact: true }).click({ force: true });
            break;
        }
      }

      try {
        const downloadPromise = this.page.waitForEvent("download");

        await this.page.getByText("Download .zip").click();
        // dirty hack because sometime download finishes before the download promise is able to be resolved
        await this.page.waitForTimeout(100);

        await downloadPromise;
      } catch (err) {
        console.error(`Download failed for "${framework}" with options: ${dataSet.map(({ text }) => text).join(", ")}`);

        throw err;
      }
    }
  };
}
