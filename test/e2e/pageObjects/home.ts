import { Locator } from "@playwright/test";
import { PageObject } from "./common.js";

export class HomePage extends PageObject {
  themeTogglerLocator: Locator;

  constructor(props) {
    super(props);

    this.themeTogglerLocator = this.page.locator(".VPNavBarAppearance .VPSwitch.VPSwitchAppearance");
  }

  async toggleTheme() {
    await this.themeTogglerLocator.click({ force: true });
  }
}
