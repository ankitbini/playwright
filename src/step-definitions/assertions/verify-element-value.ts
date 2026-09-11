import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../../env/global.js";
import { getElementLocator } from "../../support/web-element-helper.js";
import type { ScenarioWorld } from "../setup/world.js";
import { waitFor } from "../../support/wait-for-behavior.js";

Then(
    /^the "([^"]*)" should( not)? contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey,negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} should${negate ? " not" : ""} contain the text ${expectedElementText}`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifire)
            return elementText?.includes(expectedElementText) === !negate;
        });
    }
)

Then(
    /^the "([^"]*)" should( not)? equal the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey,negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} should${negate ? " not" : ""} equal the text ${expectedElementText}`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifire)
            console.log(`Actual text: ${elementText?.trim()}`)
            console.log(`Expected text: ${expectedElementText}`)
            return (elementText?.trim() === expectedElementText) === !negate;
        });
    }
)