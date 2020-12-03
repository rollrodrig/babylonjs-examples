const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9900
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }
};