import { attachment, label, step } from "allure-js-commons";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const dirname = fileURLToPath(new URL(".", import.meta.url));

describe("unit tests", () => {
  it("should pass", async () => {
    await label("env", "node");

    expect(1).toBe(1);
  });

  it("should fail", async () => {
    await label("env", "node");

    expect(1).toBe(2);
  });

  it("should be broken", async () => {
    await label("env", "node");

    throw new Error("the break reason");
  });

  it("should be skipped", async (context) => {
    await label("env", "node");

    context.skip();
  });

  describe("parent suite", () => {
    describe("suite", () => {
      describe("sub suite", () => {
        it("should contain steps (actual/expected)", async () => {
          await label("env", "node");

          await step("step 1", async () => {
            expect(1).toBe(1);
          });

          await step("step 2", async () => {
            expect(1).toBe(1);
          });

          await step("step 3", async () => {
            await step("step 3.1", async () => {
              await step("step 3.1.1", async () => {
                expect({ foo: { bar: { baz: "beep" } } }).toEqual({ baz: { bar: { foo: "beep" } } });
              });
            });
          });
        });
      });
    });
  });

  it("should contain different kind of attachments", async () => {
    await label("env", "node");

    const imageSample = await readFile(resolve(dirname, "./fixtures/image.jpg"));
    const videoSample = await readFile(resolve(dirname, "./fixtures/video.mp4"));
    const typescriptSample = await readFile(resolve(dirname, "./fixtures/sample.ts"));
    const javaSample = await readFile(resolve(dirname, "./fixtures/sample.java"));
    const pythonSample = await readFile(resolve(dirname, "./fixtures/sample.py"));
    const rubySample = await readFile(resolve(dirname, "./fixtures/sample.rb"));
    const goSample = await readFile(resolve(dirname, "./fixtures/sample.go"));

    await attachment("Sample image", imageSample, "image/jpeg");
    await attachment("Sample video", videoSample, "video/mp4");
    await attachment("Sample typescript", typescriptSample, "text/typescript");
    await attachment("Sample java", javaSample, "text/java");
    await attachment("Sample python", pythonSample, "text/python");
    await attachment("Sample ruby", rubySample, "text/ruby");
    await attachment("Sample go", goSample, "text/go");

    expect(1).toBe(1);
  });
});
