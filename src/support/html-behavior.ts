import type { Frame, Page } from "playwright";
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

export const getValue = async (
    page: Page,
    elementIdentifire: ElementLocator,
): Promise<string | null> => {
    await page.waitForSelector(elementIdentifire);
    await page.focus(elementIdentifire);
    const value =  await page.$eval<string, HTMLInputElement>(elementIdentifire, el => {
        return el.value;
    });
    return value;
}

export const uncheckElement = async (
    page: Page,
    elementIdentifire: ElementLocator,
): Promise<void> => {
    await page.uncheck(elementIdentifire);
}

export const getIframeElement = async (
    page: Page,
    iframeIdentifire: ElementLocator,
): Promise<Frame | undefined | null> => {
    await page.waitForSelector(iframeIdentifire);
    const elementHandle = await page.$(iframeIdentifire);
    const elementIframe = await elementHandle?.contentFrame();
    return elementIframe;
}

export const inputValueOnIframe = async (
    elementIframe: Frame,
    elementIdentifire: ElementLocator,
    input: string
): Promise<void> => {
    await elementIframe.fill(elementIdentifire, input);
}

export const inputValueOnPage = async (
    pages: Array<Page>,
    pageIndex: number,
    elementIdentifire: ElementLocator,
    inputValue: string
): Promise<void> => {
    await pages[pageIndex].focus(elementIdentifire);
    await pages[pageIndex].fill(elementIdentifire, inputValue);
}

export const clickElementAtIndex = async (
    page: Page,
    elementIdentifire: ElementLocator,
    elementIndex: number
): Promise<void> => {
    const elements = await page.$(`${elementIdentifire}>>nth=${elementIndex}`);
    await elements?.click();
}

export const getAttributeValue = async (
    page: Page,
    elementIdentifire: ElementLocator,
    attributeName: string
): Promise<string | null> => {
    const attributeValue = await page.locator(elementIdentifire).getAttribute(attributeName);
    return attributeValue;
}

export const scrollIntoView = async (
    page: Page, 
    elementIdentifire: ElementLocator
): Promise<void> => {
    const element = page.locator(elementIdentifire);
    await element.scrollIntoViewIfNeeded();
}