import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../../env/global.js";
import { getElementLocator } from "../../support/web-element-helper.js";
import type { ScenarioWorld } from "../setup/world.js";
import { waitFor } from "../../support/wait-for-behavior.js";

Then(
    /^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? contain the title "(.*)"$/,
    async function(this: ScenarioWorld, elementPosition: string, negate: string, expectedTitle: string) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;
        console.log(`the ${elementPosition} tab|window should ${negate ? "not" : ""} contain the title "${expectedTitle}"`)
        // Implement the logic to verify the tab title based on its position
        const pageIndex = Number(elementPosition.match(/\d/g)?.join("")) - 1
        await page.waitForTimeout(1000) // Adjust the timeout as needed
        await waitFor(async () => {
            let pages = context.pages()
            const pageTitle = await pages[pageIndex]?.title()
            return pageTitle?.includes(expectedTitle) === !negate;
        });
    }
)

Then(
    /^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? be displayed$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, negate: string) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} on the ${elementPosition} tab|window should ${negate ? "not" : ""} be displayed`)
        // Implement the logic to verify the element visibility based on its position
        const pageIndex = Number(elementPosition.match(/\d/g)?.join("")) - 1
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            let pages = context.pages()
            const isElementVisible = (await pages[pageIndex].$(elementIdentifire)) != null
            return isElementVisible === !negate;
        });
    }
)

Then(
    /^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, negate: string, expectedText: string) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} on the ${elementPosition} tab|window should ${negate ? "not" : ""} contain the text "${expectedText}"`)
        // Implement the logic to verify the element text based on its position
        const pageIndex = Number(elementPosition.match(/\d/g)?.join("")) - 1
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            let pages = context.pages()
            const elementText = await pages[pageIndex].textContent(elementIdentifire)
            return elementText?.includes(expectedText) === !negate;
        });
    }
)

Then(
    /^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? equal the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, negate: string, expectedText: string) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} on the ${elementPosition} tab|window should ${negate ? "not" : ""} equal the text "${expectedText}"`)
        // Implement the logic to verify the element text based on its position
        const pageIndex = Number(elementPosition.match(/\d/g)?.join("")) - 1
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            let pages = context.pages()
            const elementText = await pages[pageIndex].textContent(elementIdentifire)
            return (elementText === expectedText) === !negate;
        });
    }
)