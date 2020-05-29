const base = require('./webpack.base.config')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')



const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = Object.assign({}, base, {
  plugins: base.plugins || []
})

config.module.rules
  .filter(x => { return x.loader == 'vue-loader' })
  .forEach(x => x.options.extractCSS = true)

config.plugins.push(
  new ExtractTextPlugin('assets/styles.css')
)

/* if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJsPlugin({
      uglifyOptions: {
      // Drop only console.logs but leave others
        warnings: false
      }
    })
  )
} */

module.exports = config
