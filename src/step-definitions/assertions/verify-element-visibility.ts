import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../../env/global.js";
import { getElementLocator } from "../../support/web-element-helper.js";
import type { ScenarioWorld } from "../setup/world.js";
import { waitFor } from "../../support/wait-for-behavior.js";
import { logger } from "../../logger/index.js";


Then(
    /^the "([^"]*)" should( not)? be displayed$/,
    async function(this: ScenarioWorld, elementKey: string, negate?: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        logger.log(`the ${elementKey} should ${negate ? "not" : ""} be displayed`)
        const elementIdentifire = getElementLocator( page, elementKey, globalConfig)
        await waitFor(async () => {
            const isElementVisiable = (await page.$(elementIdentifire)) != null
            return isElementVisiable === !negate;
        });
    }
)