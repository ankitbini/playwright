import { Then } from "@cucumber/cucumber";
import type { ScenarioWorld } from "./setup/world.js";


Then(
    /^I wait "([^"]*)" seconds$/,
    async function(this: ScenarioWorld, waitTime: string) {
        const {
            screen: { page },
        } = this;
        console.log(`Waiting for ${waitTime} Seconds`);
        await page.waitForTimeout(parseInt(waitTime, 10) * 1000);

    }
)