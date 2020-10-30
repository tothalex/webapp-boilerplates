const path = require('path')
const webpack = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  webpack: config => {
    config.resolve = config.resolve || {}
    config.devtool = process.env.SOURCE_MAP

    config.resolve.plugins = config.resolve.plugins || []
    config.resolve.plugins = [
      ...config.resolve.plugins,
      new TsconfigPathsPlugin({
        baseUrl: path.resolve(__dirname, '.'),
        configFile: path.resolve(__dirname, '.', 'tsconfig.json')
      })
    ]

    config.plugins = config.plugins || []
    config.plugins = [...config.plugins, new webpack.IgnorePlugin(/\.test\.tsx?$/)]

    return config
  }
}
