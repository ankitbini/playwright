import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../env/global.js";
import type { ScenarioWorld } from "./setup/world.js";
import { waitFor } from "../support/wait-for-behavior.js";
import { getElementLocator } from "../support/web-element-helper.js";
import { getIframeElement, inputValueOnIframe } from "../support/html-behavior.js";


Then(
    /^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, iframeName: string, inputValue: string) {
        const {
            screen: {page},
            globalConfig,
        } = this;
        console.log(`I fill in the ${elementKey} input on the ${iframeName} iframe with ${inputValue}`)
        
         const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
         const iframeIdentifire = getElementLocator( page, iframeName, globalConfig)
         
        await waitFor(async () => {
            const elementIframe = await getIframeElement(page, iframeIdentifire)
            const result = await page.waitForSelector(iframeIdentifire, {
                state: "visible"
            })
            if (result) {
                if(elementIframe) {
                    await inputValueOnIframe(elementIframe, elementIdentifire, inputValue)
                }
            }
            return result
        })
    }
)