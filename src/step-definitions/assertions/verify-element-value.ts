import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../../env/global.js";
import { getElementLocator } from "../../support/web-element-helper.js";
import type { ScenarioWorld } from "../setup/world.js";
import { waitFor } from "../../support/wait-for-behavior.js";
import { getAttributeValue, getValue } from "../../support/html-behavior.js";

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
            //console.log(`Actual text: ${elementText?.trim()}`)
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

Then(
    /^the "([^"]*)" should( not)? contain the value "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey,negate: boolean, elementValue: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} should${negate ? " not" : ""} contain the value ${elementValue}`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            console.log(`elementIdentifire: ${elementIdentifire}`)
            const elementAttribute = await getValue(page, elementIdentifire)
            return elementAttribute?.includes(elementValue) === !negate;
        });
    }
)

Then(
    /^the "([^"]*)" should( not)? equal the value "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey,negate: boolean, elementValue: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} should${negate ? " not" : ""} equal the value ${elementValue}`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            //console.log(`elementIdentifire: ${elementIdentifire}`)
            const elementAttribute = await getValue(page, elementIdentifire)
            return (elementAttribute === elementValue) === !negate;
        });
    }
)

Then(
    /^the "([^"]*)" should( not)? be enabled$/,
    async function(this: ScenarioWorld, elementKey: ElementKey,negate: boolean) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} should${negate ? " not" : ""} be enabled`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            const isElementEnabled = await page.isEnabled(elementIdentifire)
            return isElementEnabled === !negate;
        });
    }
)

Then(
    /^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? contain the text "(.*)"$/,
    async function(this: ScenarioWorld,elementPosition: string, elementKey: ElementKey,negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementPosition} ${elementKey} should${negate ? " not" : ""} contain the text ${expectedElementText}`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        const pageIndex = Number(elementPosition.match(/\d/g)?.join("")) - 1
        await waitFor(async () => {
            const elementText = await page.textContent(`${elementIdentifire}>>nth=${pageIndex}`)
            //console.log(`Actual text: ${elementText?.trim()}`)
            return elementText?.includes(expectedElementText) === !negate;
        });
    }
)

Then(
    /^the "([^"]*)" "([^"]*)" attribute should( not)? contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, attributeName: string, negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} "${attributeName}" attribute should${negate ? " not" : ""} contain the text "${expectedElementText}"`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            const elementAttribute = await getAttributeValue(page, elementIdentifire, attributeName)
            return elementAttribute?.includes(expectedElementText) === !negate;
        });
    }
)