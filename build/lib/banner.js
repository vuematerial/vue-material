import { pack } from '../config.js'

const version = process.env.VERSION || pack.version
const banner = `/*!
 * ${pack.name} v${version}
 * Made with <3 by ${pack.author.name} ${new Date().getFullYear()}
 * Released under the ${pack.license} License.
 */`

export default banner
