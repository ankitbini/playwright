import { When } from "@cucumber/cucumber";
import type { ElementKey } from "../env/global.js";
import type { ScenarioWorld } from "./setup/world.js";
import { waitFor } from "../support/wait-for-behavior.js";
import { getElementLocator } from "../support/web-element-helper.js";
import { clickElement, clickElementAtIndex } from "../support/html-behavior.js";

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


When(
    /^I click on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" (?:button|link|icon|element)$/,
    async function(this: ScenarioWorld, elementIndex: string, elementKey: ElementKey) {
        const {
            screen: {page},
            globalConfig,
        } = this;
        console.log(`I click the ${elementIndex} ${elementKey} (?:button|link|icon|element)`)
        
         const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
         const pageIndex = Number(elementIndex.match(/\d/g)?.join("")) - 1
        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifire, {
                state: "visible"
            })
            if (result) {
                await clickElementAtIndex(page, elementIdentifire, pageIndex)
            }
            return result
        })
    }
)