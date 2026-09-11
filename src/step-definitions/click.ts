import { When } from "@cucumber/cucumber";
import type { ElementKey } from "../env/global.js";
import type { ScenarioWorld } from "./setup/world.js";
import { waitFor } from "../support/wait-for-behavior.js";
import { getElementLocator } from "../support/web-element-helper.js";
import { clickElement } from "../support/html-behavior.js";

When(
    /^I click on the "([^"]*)" (?:button|link|icon|element)$/,
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: {page},
            globalConfig,
        } = this;
        console.log(`I click the ${elementKey} (?:button|link|icon|element)`)
        
         const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifire, {
                state: "visible"
            })
            if (result) {
                await clickElement(page, elementIdentifire)
            }
            return result
        })
    }
)