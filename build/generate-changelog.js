import converntionalChangelog from 'conventional-changelog'
import config from 'conventional-changelog-vue-material'
import concat from 'concat'
import { createWriteStream } from 'fs'
import packageJson from '../package.json'

const { version } = packageJson
const releaseNotesFile = './RELEASE_NOTES.md'
const changelogFile = './CHANGELOG.md'
const releaseNotes = createWriteStream(releaseNotesFile)

config.then(data => {
  const changelogConfig = {
    config: data,
    releaseCount: 0,
    pkg: {
      transform (pkg) {
        pkg.version = `v${version}`
        return pkg
      }
    }
  }

  converntionalChangelog(changelogConfig, {}).pipe(releaseNotes).on('close', () => {
    concat([releaseNotesFile, changelogFile], changelogFile)
  })
})
