import type { GlobalConfig } from "../env/global.js";


const isLookupVariable = (input: string, lookupTrigger: string): boolean => {
    return !!(lookupTrigger && input.startsWith(lookupTrigger))
}

const getLookupVariable = (input: string, lookupTrigger: string, config: GlobalConfig): string => {
    const key = input.substring(lookupTrigger.length)
    const lookupValue = config.emailsConfig[key] ?? process.env[key]
    if (!lookupValue) {
        throw Error(`Lookup value for key "${key}" not found`)
    }
    return lookupValue
}


export const parseInput = (input: string, config: GlobalConfig):string => {
    const lookupTrigger = process.env.VAR_LOOKUP_TRIGGER ?? '$.'
    return isLookupVariable(input, lookupTrigger) ? getLookupVariable(input, lookupTrigger, config) : input;
}

