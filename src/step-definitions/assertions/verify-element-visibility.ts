import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../../env/global.js";
import { getElementLocator } from "../../support/web-element-helper.js";
import type { ScenarioWorld } from "../setup/world.js";
import { waitFor } from "../../support/wait-for-behavior.js";

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, expectedElementText: string) {
        const {
            screen: { page },
            globalVariables,
            globalConfig,
        } = this;
        console.log(`the ${elementKey} should contain the text ${expectedElementText}`)
        const elementIdentifire = getElementLocator( page, elementKey, globalVariables, globalConfig)
        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifire)
            return elementText?.includes(expectedElementText)
        });
    }
)

Then(
    /^the "([^"]*)" should be displayed$/,
    async function(this: ScenarioWorld, elementKey: string) {
        const {
            screen: { page },
            globalVariables,
            globalConfig,
        } = this;
        console.log(`the ${elementKey} should be displayed`)
        const elementIdentifire = getElementLocator( page, elementKey, globalVariables, globalConfig)
        await waitFor(async () => {
            const isElementVisiable = (await page.$(elementIdentifire)) != null
            return isElementVisiable
        });
    }
)