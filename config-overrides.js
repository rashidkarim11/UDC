const webpack = require('webpack')
const path = require('path')

module.exports = function override(config) {
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ])

  config.resolve.alias = {
    src: path.resolve(__dirname, 'src/')
  }

  config.ignoreWarnings = [/Failed to parse source map/]
  return config
}
