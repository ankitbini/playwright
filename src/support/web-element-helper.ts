import type { Page } from "playwright"
import type { GlobalConfig, ElementKey, ElementLocator } from "../env/global.js";
import { getCurrentPageId } from "./navogation-behavior.js";

export const getElementLocator = (
    page: Page,
    elementKey: ElementKey,
    globalConfig: GlobalConfig
): ElementLocator => {

    const currentPage = getCurrentPageId(page, globalConfig)
    
    const { pageElementMappings } = globalConfig
    
    return pageElementMappings[currentPage]?.[elementKey] || pageElementMappings.common?.[elementKey]
}