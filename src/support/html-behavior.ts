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
