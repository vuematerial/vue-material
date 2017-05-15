import pack from '../package.json'

const version = process.env.VERSION || pack.version
const banner = `/*!
 * ${pack.name} v${version}
 * Made with <3 by ${new Date().getFullYear()} ${pack.author.name}
 * Released under the ${pack.license} License.
 */`

export default banner
