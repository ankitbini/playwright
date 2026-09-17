import dotenv from 'dotenv'
import { env, getJsonFromFile } from './env/parseEnv.js'
import * as fs from 'fs'
import { resolve } from 'node:path'
import type {
    GlobalConfig,
    PagesConfig,
    HostsConfig,
    PageElementMappings,
    EmailsConfig,
} from './env/global.js'
import { generateCucumberRuntimeTag } from './support/tag-helper.js'

const environment = process.env.NODE_ENV ?? 'localhost'

dotenv.config({ path: resolve(process.cwd(), 'env/common.env') })
dotenv.config({ path: resolve(process.cwd(), `env/${environment}.env`) })

const hostsConfig: HostsConfig = getJsonFromFile(env('HOSTS_URLS_PATH'))
//logger.log("Loaded hosts configuration:", hostsConfig)
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGES_URLS_PATH'))
//logger.log("Loaded pages configuration:", pagesConfig)
const emailsConfig: EmailsConfig = getJsonFromFile(env('EMAILS_CONFIG_PATH'))

const getEnvList = (): string[] => {
    const envList = Object.keys(hostsConfig)
    if(envList.length === 0) {
        throw Error(`No environments found in your ${env('HOSTS_URLS_PATH')}`)
    }
    return envList
}

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
    emailsConfig,
    pageElementMappings,
}



const common = `./src/features/**/*.feature \
    --import ./tsx-register.js \
    --import "src/step-definitions/**/*.ts" \
    --world-parameters '${JSON.stringify(worldParameters)}' \
    -f json:./reports/report.json \
    --format pretty \
    --parallel ${env('PARALLEL')} \
    --retry ${env('RETRY')}`;

//--format pretty`;this allow logger.log statement
//  --format progress-bar`; this option shows a progress bar in the console

const dev = generateCucumberRuntimeTag(common, environment, getEnvList(), 'dev')
const smoke = generateCucumberRuntimeTag(common, environment, getEnvList(), 'smoke')
const regression = generateCucumberRuntimeTag(common, environment, getEnvList(), 'regression')

export { dev, smoke, regression }