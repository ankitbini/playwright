import { Then } from "@cucumber/cucumber";
import type { ElementKey } from "../../env/global.js";
import { getElementLocator } from "../../support/web-element-helper.js";
import type { ScenarioWorld } from "../setup/world.js";
import { waitFor } from "../../support/wait-for-behavior.js";
import { logger } from "../../logger/index.js";

Then(/^the "([^"]*)" should( not)? equal the "([^"]*)" stored in global variables$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate:boolean, variableName: string) {
        const {
            screen: { page },
            globalConfig,
            globalVariables
        } = this;
        logger.log(`Verifying that the element "${elementKey}" should${negate ? " not" : ""} equal the value stored in global variable "${variableName}"`);
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifier);
            const expectedValue = globalVariables[variableName];
            return (elementText === expectedValue) === !negate;
        })
    });


    Then(/^the "([^"]*)" should( not)? contain the "([^"]*)" stored in global variables$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate:boolean, variableName: string) {
        const {
            screen: { page },
            globalConfig,
            globalVariables
        } = this;
        logger.log(`Verifying that the element "${elementKey}" should${negate ? " not" : ""} contain the value stored in global variable "${variableName}"`);
        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifier);
            const expectedValue = globalVariables[variableName];
            return elementText?.includes(expectedValue) === !negate;
        })
    });