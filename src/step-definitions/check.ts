import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../env/global.js";
import { getElementLocator } from "../support/web-element-helper.js";
import type { ScenarioWorld } from "./setup/world.js";
import { waitFor } from "../support/wait-for-behavior.js";
import { checkElement } from "../support/html-behavior.js";


Then(
    /^I check the "([^"]*)" radio button$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: {page},
            globalConfig,
        } = this;
        console.log(`I am checking the ${elementKey} radio button`)
        
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifire, { state: "visible" });
            if (result) {
                await checkElement(page, elementIdentifire);
            }
            return result
        });

    }
)