import type { Page } from "playwright";
import type { ElementLocator } from "../env/global.js";

export const clickElement = async (
    page: Page, 
    elementIdentifire: ElementLocator,
): Promise<void> => {
    await page.click(elementIdentifire);
}

export const inputValue = async (
    page: Page,
    elementIdentifire: ElementLocator,
    input: string
): Promise<void> => {
    await page.focus(elementIdentifire);
    await page.fill(elementIdentifire, input);
}


export const selectValue = async (
    page: Page,
    elementIdentifire: ElementLocator,
    option: string
): Promise<void> => {
    await page.focus(elementIdentifire);
    await page.selectOption(elementIdentifire, option);
}

export const checkElement = async (
    page: Page,
    elementIdentifire: ElementLocator,
): Promise<void> => {
    await page.focus(elementIdentifire);
    await page.check(elementIdentifire);
}
