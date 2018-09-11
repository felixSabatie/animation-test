const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    filename: './app.js'
  },
  module:{
     rules:[
             {
                 test:/\.(s*)css$/,
                 use: ExtractTextPlugin.extract({
                        fallback:'style-loader',
                        use:['css-loader','sass-loader'],
                    })
              }
      ]
   },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      files: ['./**/*js', './**/*.html', './**/*.scss']
    }),
    new ExtractTextPlugin({filename:'styles.css'}),
  ],
  watch: true,
};
