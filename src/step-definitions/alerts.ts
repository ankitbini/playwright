import { When } from "@cucumber/cucumber";
import type { ElementKey } from "../env/global.js";
import type { ScenarioWorld } from "./setup/world.js";
import { waitFor } from "../support/wait-for-behavior.js";
import { getElementLocator } from "../support/web-element-helper.js";
import { logger } from "../logger/index.js";

When(/^I click (accept|dismiss) on the alert dialog$/, 
    async function (this: ScenarioWorld, action: "accept" | "dismiss") {
    const {
        screen: { page }
    } = this;
    logger.log(`I clicked ${action} on the alert dialog`);
    if(action === "dismiss") {
        page.on('dialog', dialog => dialog.dismiss());
    }else{
        page.on('dialog', dialog => dialog.accept());
    }
});