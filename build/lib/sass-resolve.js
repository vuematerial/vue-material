import { config } from '../config'

export default (file, prev) => {
  if (file.indexOf('~') >= 0) {
    const [, alias, rest] = file.match(/(\w+)(.+)/)

    return {
      file: config.alias[alias] + rest + '.scss'
    }
  }

  return { file }
}
