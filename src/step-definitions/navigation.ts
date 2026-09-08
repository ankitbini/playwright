import { Given } from "@cucumber/cucumber";
import type { PageId } from "../env/global.js";
import { navigateToPage } from "../support/navogation-behavior.js";
import type { ScenarioWorld } from "./setup/world.js";

Given(
    /^I am on the "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId) {
        const {
            screen: {page},
            globalVariables,
            globalConfig,
        } = this;
        console.log(`I am on the ${pageId} page`)
        globalVariables.currentScreen = pageId
        await navigateToPage(page, pageId, globalConfig)
    }
)

