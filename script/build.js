process.env.NODE_ENV = 'production'

const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../webpack/production.config')
const fs = require('fs')
const filesize = require('filesize')

webpack(config).run((err, stats) => {
  if (err) {
    console.error('Failed to create a production build. Reason:')
    console.error(err.message || err)
    process.exit(1)
  }

  const data = stats.toJson()
  console.log(`${chalk.green('Compiled successfully.')}

  Hash: ${chalk.bold(data.hash)}
  Version: webpack ${chalk.bold(data.version)}
  Time: ${chalk.bold(data.time)}ms
`)

  const assets = data.assets.filter(asset => /\.(js|css|json)(\?.*){0,}$/.test(asset.name))
  assets.sort((a, b) => a.name.localeCompare(b.name))
  assets.forEach(asset => {
    if (asset.name.match(/\.json$/)) {
      const file = `./build/${asset.name}`
      fs.writeFileSync(file, JSON.stringify(JSON.parse(fs.readFileSync(file).toString())))
      return
    }

    console.log(`  ${chalk.cyan(asset.name)}  ${chalk.dim(filesize(asset.size))}`)
  })
})
