import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../env/global.js";
import { getElementLocator } from "../support/web-element-helper.js";
import type { ScenarioWorld } from "./setup/world.js";
import { waitFor } from "../support/wait-for-behavior.js";

Then(/^I retrieve "([^"]*)" text and store it as "([^"]*)" in global variables$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, variableName: string) {
        const {
            screen: { page },
            globalConfig,
            globalVariables
        } = this;
        console.log(`I retrieved text from element "${elementKey}" and stored it as "${variableName}" in global variables`);
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {
                state: "visible"
            })
            if (result) {
                const text = await page.textContent(elementIdentifier);
                if (text != null) {
                    globalVariables[variableName] = text;
                }
            }
            return result
        })
    });

