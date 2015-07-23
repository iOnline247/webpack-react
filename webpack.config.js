var webpack = require('webpack');
var path = require('path');
var commonsPlugin = 
	new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	context: path.join(__dirname, "src"),
	entry: './components/app.js',
	output: {
		path: path.join(__dirname, "public", "assets"),
		filename: "[name].js",
        publicPath: "/assets/"
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader'}
		]
	},
	plugins: [commonsPlugin]
};