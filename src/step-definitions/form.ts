import type { Page } from "@playwright/test";
import { Then } from "@cucumber/cucumber";
import { waitFor } from "../support/wait-for-behavior.js";
import { getElementLocator } from "../support/web-element-helper.js";
import type { ScenarioWorld } from "./setup/world.js";
import type { ElementKey } from "../env/global.js"
import { 
    inputValue, 
    selectValue } from "../support/html-behavior.js";


Then(
    /^I fill in the "([^"]*)" input with "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, input: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`I am filling in the ${elementKey} input with ${input}`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifire, { state: "visible" })
            if(result){
                await inputValue(page, elementIdentifire, input)
            }
            return result
        });

    }
)


Then(
    /^I select the "([^"]*)" option from the "([^"]*)"$/,
    async function(this: ScenarioWorld, option: string, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`I am selecting the ${option} option from the ${elementKey} dropdown`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifire, { state: "visible" })
            if(result){
                await selectValue(page, elementIdentifire, option)
            }
            return result
        });

    }
)