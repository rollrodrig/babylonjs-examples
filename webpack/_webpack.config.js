const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, '/'),
		// compress: true,
		port: 5632
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
  		splitChunks: {
	    	chunks: 'all',
		},
	},
};