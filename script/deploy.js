const path = require('path')
const ghPages = require('gh-pages')
const git = require('git-rev-sync')

const validBranchs = [
  'release',
  'master'
]

const branceName = process.argv[2]

if (validBranchs.indexOf(branceName) === -1) {
  console.error('Invalid [branch] name!')
  process.exit(1)
}

const config = {
  message: `${git.short()} - Update ${(new Date()).toISOString()}`,
  logger: message => console.log(message),
  branch: `build/${branceName}`,
  clone: `.cache/${branceName}`
}

ghPages.publish(path.resolve('build'), config)
