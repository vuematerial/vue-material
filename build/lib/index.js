import { existsSync, mkdirSync } from 'fs'
import entries from './entries'
import build from './bundle'

if (!existsSync('dist')) {
  mkdirSync('dist')
}

build(entries)
