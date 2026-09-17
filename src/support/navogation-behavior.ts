import type { Page } from "@playwright/test";
import type { GlobalConfig, PageId } from "../env/global.js";

export const navigateToPage = async (
    page: Page,
    pageId: PageId,
    { pagesConfig, hostsConfig }: GlobalConfig
): Promise<void> => {
    const {
        UI_AUTOMATION_HOST: hostName = 'localhost'
    } = process.env

    const hostPath = hostsConfig[`${hostName}`]
    //logger.log(`Navigating to host: ${hostName}, hostPath: ${hostPath}`)
    const url = new URL(hostPath)
    // logger.log(`Constructed URL: ${url}`)
    const pagesConfigItem = pagesConfig[pageId]
    url.pathname = pagesConfigItem.route
    // logger.log("pages route", url.pathname)
    await page.goto(url.href)
}

const pathMatchesPageId = (
    path: string,
    pageId: PageId,
    { pagesConfig }: GlobalConfig
): boolean => {
    const pageRegexString = pagesConfig[pageId].regex
    const pageRegex = new RegExp(pageRegexString)
    return pageRegex.test(path)
}

export const currentPathMatchesPageId = (
    page: Page,
    pageId: PageId,
    globalConfig: GlobalConfig
): boolean => {
    const { pathname: currentPath } = new URL(page.url())
    //logger.log(`Current path: ${currentPath}`)
    return pathMatchesPageId(currentPath, pageId, globalConfig)
};

export const getCurrentPageId = (
    page: Page,
    globalConfig: GlobalConfig
): PageId => {
    const { pagesConfig } = globalConfig
    //logger.log(`current pagesConfig: ${JSON.stringify(pagesConfig)}`)
    const pageConfigPageIds = Object.keys(pagesConfig)
    //logger.log(`pageConfigPageIds: ${JSON.stringify(pageConfigPageIds)}`)
    const { pathname: currentPath } = new URL(page.url())
    const currentPageId = pageConfigPageIds.find(pageId => pathMatchesPageId(currentPath, pageId, globalConfig))
    //logger.log(`currentPageId: ${currentPageId}`)
    if (!currentPageId) {
        throw Error(`Failed to get page name from current route : ${pagesConfig}, \
            available pages: ${JSON}`)
    }
    return currentPageId
}

export const reloadPage =
    async (page: Page): Promise<void> => {
        await page.reload()
    }