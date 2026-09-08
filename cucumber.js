import { register } from 'tsx/esm/api'

register()

const { dev, smoke, regression } = await import('./src/index.ts')

export default () => ({ dev, smoke, regression })