import { Then } from "@cucumber/cucumber";
import type { ScenarioWorld } from "./setup/world.js";
import type { ElementKey } from "../env/global.js";
import { getElementLocator } from "../support/web-element-helper.js";
import { waitFor } from "../support/wait-for-behavior.js";
import { inputValueOnPage } from "../support/html-behavior.js";


Then(
    /^I fill in the "([^"]*)" input on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) with "([^"]*)"$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, inputValue: string) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;
        console.log(`I am filling in the ${elementKey} input on the ${elementPosition} tab|window with ${inputValue}`)
        const pageIndex = Number(elementPosition.match(/\d/g)?.join("")) - 1
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            let pages = context.pages()
            const result = await pages[pageIndex].waitForSelector(elementIdentifire, { state: "visible" })
            if(result){
                await inputValueOnPage(pages, pageIndex, elementIdentifire, inputValue)
            }
            //await page.waitForTimeout(3000)
            return result
        });

    }
)