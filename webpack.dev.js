var path = require('path');
module.exports = {
  entry: './raw_resources/js/lib/babelified-merged-scripts.js',
  output: {
    filename: 'dev.bundle.js',
    path: path.resolve(__dirname, 'js')
  }
}