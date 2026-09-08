import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test"
import type { ElementKey } from "../../env/global.js";
import { getElementLocator } from "../../support/web-element-helper.js";
import type { ScenarioWorld } from "../setup/world.js";

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
        const content = await page.textContent(elementIdentifire)
        expect(content).toBe(expectedElementText)
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
        const locator = page.locator(elementIdentifire)
        await expect(locator).toBeVisible()
    }
)