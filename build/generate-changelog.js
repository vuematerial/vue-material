import cc from 'conventional-changelog'
import config from 'conventional-changelog-vue-material'
import ora from 'ora'
import { green } from 'chalk'
import concat from 'concat'
import { createWriteStream } from 'fs'
import packageJson from '../package.json'

const { version } = packageJson
const releaseNotesFile = './RELEASE_NOTES.MD'
const changelogFile = './CHANGELOG.md'
const releaseNotes = createWriteStream(releaseNotesFile)
const spinner = ora({
  text: 'Generating changelog...',
  color: 'green'
})

spinner.start()

config.then(data => {
  const changelogConfig = {
    config: data,
    pkg: {
      transform (pkg) {
        pkg.version = `v${version}`
        return pkg
      }
    }
  }

  cc(changelogConfig).pipe(releaseNotes).on('close', () => {
    concat([releaseNotesFile, changelogFile], changelogFile)

    spinner.succeed(green('Changelog released!'))
  })
})
