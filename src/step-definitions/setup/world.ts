import playwright from "@playwright/test";
import type {
    BrowserContextOptions,
    Page,
    Browser,
    BrowserContext,
    BrowserType
} from "playwright";

import { World, setWorldConstructor } from "@cucumber/cucumber"; // these are run time class and function so no need to write type keyword
import type { IWorldOptions } from "@cucumber/cucumber";  // this is interface, it's type that's why type keyword must
import { env } from "../../env/parseEnv.js";
import type { GlobalConfig } from "../../env/global.js";

export type Screen = {
    browser: Browser;
    context: BrowserContext;
    page: Page;
}

export class ScenarioWorld extends World {
    constructor(options: IWorldOptions){
        super(options)
        this.globalConfig = options.parameters as GlobalConfig;
    }
    screen!: Screen;
    globalConfig!: GlobalConfig;
    async init(contextOptions?: BrowserContextOptions): Promise<Screen>{
        await this.screen?.page?.close();
        await this.screen?.context?.close();
        await this.screen?.browser?.close();

        const browser = await this.newBrowser();
        const context = await browser.newContext(contextOptions);
        const page = await context.newPage();

        this.screen = { browser, context, page };
        return this.screen;

    }

    private newBrowser = async(): Promise<Browser> => {

        const automationBrowsers = ['chromium', 'firefox', 'webkit'] as const;
        type AutomationBrowser = typeof automationBrowsers[number ];
        const automationBrowser = env('UI_AUTOMATION_BROWSER') as AutomationBrowser;

        const browserType: BrowserType = playwright[automationBrowser];
        const browser = await browserType.launch({
            headless: process.env.HEADLESS !== 'false',
            args: ['--disable-web-security', '--disable-features=IsolateOrigins, site-per-process'],
        })
        return browser;
    }
}

setWorldConstructor(ScenarioWorld)