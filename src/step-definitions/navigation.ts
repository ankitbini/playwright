import { Given } from "@cucumber/cucumber";
import type { PageId } from "../env/global.js";
import { navigateToPage, currentPathMatchesPageId } from "../support/navogation-behavior.js";
import type { ScenarioWorld } from "./setup/world.js";
import { waitFor } from "../support/wait-for-behavior.js";

Given(
    /^I am on the "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId) {
        const {
            screen: {page},
            globalConfig,
        } = this;
        console.log(`I am on the ${pageId} page`)
        
        await navigateToPage(page, pageId, globalConfig)
        await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig))
    }
)

Given(
    /^I am directed to the "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId) {
        const {
            screen: {page},
            globalConfig,
        } = this;
        console.log(`I am directed to the ${pageId} page`)
        
        await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig))
    }
)

