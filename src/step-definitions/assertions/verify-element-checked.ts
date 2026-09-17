import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../../env/global.js";
import { getElementLocator } from "../../support/web-element-helper.js";
import type { ScenarioWorld } from "../setup/world.js";
import { waitFor } from "../../support/wait-for-behavior.js";
import { logger } from "../../logger/index.js";


Then(
    /^the "([^"]*)" (?:radio button|check box|toggle|switch) should( not)? be checked$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
        const {
            screen: {page},
            globalConfig,
        } = this;
        logger.log(`The ${elementKey} check box | radio button should${negate ? " not" : ""} be checked`)
        
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            const isElementChecked = await page.isChecked(elementIdentifire);
            return isElementChecked === !negate;
        });

    }
)