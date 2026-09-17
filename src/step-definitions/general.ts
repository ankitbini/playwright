import { Then } from "@cucumber/cucumber";
import type { ScenarioWorld } from "./setup/world.js";
import type { ElementKey } from "../env/global.js";
import { getElementLocator } from "../support/web-element-helper.js";
import { waitFor } from "../support/wait-for-behavior.js";
import { scrollIntoView } from "../support/html-behavior.js";


Then(
    /^I wait "([^"]*)" seconds$/,
    async function(this: ScenarioWorld, waitTime: string) {
        const {
            screen: { page },
        } = this;
        console.log(`Waiting for ${waitTime} Seconds`);
        await page.waitForTimeout(parseInt(waitTime, 10) * 1000);

    }
)

Then(
    /^I scroll to the "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig
        } = this;
        console.log(`Scrolling to the ${elementKey}`);
        const elementIdentifire = getElementLocator(page, elementKey, globalConfig);
        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifire, { state: "visible" });
            if (result) {
                await scrollIntoView(page, elementIdentifire);
            }
            return result
        });
    }
)

