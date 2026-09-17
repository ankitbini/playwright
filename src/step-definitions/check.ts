import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../env/global.js";
import { getElementLocator } from "../support/web-element-helper.js";
import type { ScenarioWorld } from "./setup/world.js";
import { waitFor } from "../support/wait-for-behavior.js";
import { checkElement, uncheckElement } from "../support/html-behavior.js";
import { logger } from "../logger/index.js";


Then(
    /^I (check)?(uncheck)? the "([^"]*)" (?:radio button|check box|toggle|switch)$/,
    async function(this: ScenarioWorld,checked: boolean, unchecked: boolean, elementKey: ElementKey) {
        const {
            screen: {page},
            globalConfig,
        } = this;
        logger.log(`I am ${checked ? "checking" : "unchecking"} the ${elementKey} radio button | check box`)
        
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        //logger.log("check ", checked);
       // logger.log("unchecked ", unchecked);
        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifire, { state: "visible" });
            if (result) {
                if(!!unchecked){
                    await uncheckElement(page, elementIdentifire);
                }else{
                    await checkElement(page, elementIdentifire);
                }
            }
            return result
        });

    }
)