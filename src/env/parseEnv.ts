import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export const env = (key: string): string =>{
    const value =  process.env[key]
    if(!value) {
        throw Error(`No anvironment variable found for ${key}`)
    }
    return value;
}

export const getJsonFromFile = <T = Record<string, string>> (filePath: string): T => {
    const json = readFileSync(resolve(process.cwd(), filePath), 'utf8')
    return JSON.parse(json) as T
}