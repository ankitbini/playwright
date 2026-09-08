import type { Page } from "playwright"
import type { GlobalVariables, GlobalConfig, ElementKey, ElementLocator } from "../env/global.js";

export const getElementLocator = (
    page: Page,
    elementKey: ElementKey,
    globalVariables: GlobalVariables,
    globalConfig: GlobalConfig
): ElementLocator => {
    
    const { pageElementMappings } = globalConfig
    const currentPage = globalVariables.currentScreen
    return pageElementMappings[currentPage]?.[elementKey] || pageElementMappings.common?.[elementKey]
}