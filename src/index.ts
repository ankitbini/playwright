import dotenv from 'dotenv'
import { env, getJsonFromFile } from './env/parseEnv.js'
import * as fs from 'fs'
import { resolve } from 'node:path'
import type {
    GlobalConfig,
    PagesConfig,
    HostsConfig,
    PageElementMappings,
} from './env/global.js'

dotenv.config({path: env('COMMON_CONFIG_FILE')})

const hostsConfig: HostsConfig = getJsonFromFile(env('HOSTS_URLS_PATH'))
//console.log("Loaded hosts configuration:", hostsConfig)
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGES_URLS_PATH'))
//.log("Loaded pages configuration:", pagesConfig)
const mappingDirectory = resolve(process.cwd(), env('PAGE_ELEMENTS_PATH'))
const mappingFiles = fs.readdirSync(mappingDirectory)
const pageElementMappings: PageElementMappings = mappingFiles.reduce(
    (pageElementConfigAcc, file) => {
    const key = file.replace('.json', '')
    const elementMappings = getJsonFromFile(resolve(mappingDirectory, file))
    return { ...pageElementConfigAcc, [key]: elementMappings }
    },
    {}
)

const worldParameters: GlobalConfig = {
    hostsConfig,
    pagesConfig,
    pageElementMappings,
}



const common = `./src/features/**/*.feature \
    --import ./tsx-register.js \
    --import "src/step-definitions/**/*.ts" \
    --world-parameters '${JSON.stringify(worldParameters)}' \
    -f json:./reports/report.json \
    --format pretty`;

//--format pretty`;this allow console.log statement
//  --format progress-bar`; this option shows a progress bar in the console

const dev = `${common} --tags '@dev'`
const smoke = `${common} --tags '@smoke'`
const regression = `${common} --tags '@regression'`

export { dev, smoke, regression }