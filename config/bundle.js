import { readFile, writeFile } from 'fs'
import { relative } from 'path'
import { gzip } from 'zlib'
import { rollup } from 'rollup'
import { cyan, blue, green, red } from 'chalk'
import { minify } from 'uglify-js'
import { prepack } from 'prepack';
import optimize from 'optimize-js'
import ora from 'ora'

let spinner = null
const build = entries => {
  let built = 0
  const total = entries.length
  const next = () => {
    buildEntry(entries[built]).then(() => {
      if (++built < total) {
        next()
      } else {
        spinner.succeed(green('Build finished with success!\n'))
      }
    }).catch(error => {
      spinner.fail(red('Something wrong happened:\n'))
      throw error
    })
  }

  spinner = ora(cyan('Building Vue Material\n'))
  next()
}

const buildEntry = config => {
  const isProd = /min\.js$/.test(config.dest)

  return rollup(config).then(bundle => {
    const code = bundle.generate(config).code

    if (isProd) {
      const prepacked = prepack(code).code
      const minified = config.banner + '\n' + optimize(minify(prepacked, {
        mangle: true,
        compress: {
          sequences: true,
          dead_code: true,
          conditionals: true,
          booleans: true,
          unused: true,
          if_return: true,
          join_vars: true,
          drop_console: true
        }
      }).code)

      return write(config.dest, minified).then(zip(config.dest))
    } else {
      return write(config.dest, code)
    }
  })
}

const write = (dest, code) => {
  return new Promise((resolve, reject) => {
    writeFile(dest, code, error => {
      if (error) {
        return reject(error)
      }

      const log = blue(relative(process.cwd(), dest)) + ' ' + green.bold(getSize(code))

      spinner.succeed(log)

      resolve()
    })
  })
}

const zip = file => {
  return () => {
    return new Promise((resolve, reject) => {
      readFile(file, (error, buffer) => {
        if (error) {
          return reject(error)
        }

        gzip(buffer, (error, buffer) => {
          if (error) {
            return reject(error)
          }

          write(file + '.gz', buffer).then(resolve)
        })
      })
    })
  }
}

const getSize = code => (code.length / 1024).toFixed(2) + 'kb'

export default build
