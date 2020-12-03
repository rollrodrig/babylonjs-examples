const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, '/'),
		// compress: true,
		port: 56322
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	
};