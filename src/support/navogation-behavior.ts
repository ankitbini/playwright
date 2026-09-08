import type { Page } from "@playwright/test";
import type { GlobalConfig, PageId } from "../env/global.js";

export const navigateToPage = async (
    page: Page,
    pageId: PageId,
    { pagesConfig, hostsConfig}: GlobalConfig
): Promise<void> => {
    const {
        UI_AUTOMATION_HOST: hostName = 'localhost'
    } = process.env

    const hostPath = hostsConfig[`${hostName}`]
    //console.log(`Navigating to host: ${hostName}, hostPath: ${hostPath}`)
    const url = new URL(hostPath)
   // console.log(`Constructed URL: ${url}`)
    const pagesConfigItem = pagesConfig[pageId]
    url.pathname = pagesConfigItem.route
   // console.log("pages route", url.pathname)
    await page.goto(url.href)
}