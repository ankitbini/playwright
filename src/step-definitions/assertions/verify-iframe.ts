import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../../env/global.js";
import { getElementLocator } from "../../support/web-element-helper.js";
import type { ScenarioWorld } from "../setup/world.js";
import { waitFor } from "../../support/wait-for-behavior.js";
import { getIframeElement } from "../../support/html-behavior.js";

Then(
    /^the "([^"]*)" on the "([^"]*)" iframe should( not)? be displayed$/,
    async function(this: ScenarioWorld, elementKey: string, iframeName: string, negate: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} on the ${iframeName} iframe should ${negate ? "not" : ""} be displayed`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
         const iframeIdentifire = getElementLocator( page, iframeName, globalConfig)
         

        await waitFor(async () => {
            const elementIframe = await getIframeElement(page, iframeIdentifire)
            const isElementVisiable = (await elementIframe?.$(elementIdentifire)) != null
            return isElementVisiable === !negate;
        });
    }
)


Then(
    /^the "([^"]*)" on the "([^"]*)" iframe should( not)? contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: string, iframeName: string, negate: string, expectedText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} on the ${iframeName} iframe should ${negate ? "not" : ""} contain the text "${expectedText}"`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
         const iframeIdentifire = getElementLocator( page, iframeName, globalConfig)
         

        await waitFor(async () => {
            const elementIframe = await getIframeElement(page, iframeIdentifire)
            const elementText = await elementIframe?.textContent(elementIdentifire)
            return elementText?.includes(expectedText) === !negate;
        });
    }
)

Then(
    /^the "([^"]*)" on the "([^"]*)" iframe should( not)? equal the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: string, iframeName: string, negate: string, expectedText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        console.log(`the ${elementKey} on the ${iframeName} iframe should ${negate ? "not" : ""} equal the text "${expectedText}"`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
         const iframeIdentifire = getElementLocator( page, iframeName, globalConfig)
         

        await waitFor(async () => {
            const elementIframe = await getIframeElement(page, iframeIdentifire)
            const elementText = await elementIframe?.textContent(elementIdentifire)
            return (elementText === expectedText) === !negate;
        });
    }
)