var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlPluginConfig = {
	template: './client/index.html',
	filename: 'index.html',
	inject: 'body',
	favicon: 'favicon.png'
};
var cssnext = require('postcss-cssnext');

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'script.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}, {
				// transform own css
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style!css!postcss'
			}, {
				// do not transform vendor css
				test: /\.css$/,
				include: /node_modules/,
				loader: 'style!css'
			}, {
				test: /\.(png|svg|jpg)$/,
				exclude: /node_modules/,
				loader: 'url-loader?limit=10000&name=res/[hash].[ext]',
			}
		]
	},
	postcss: function () {
		return [cssnext({
			browsers: ['last 2 versions', 'IE > 10']
		})]
	},
	plugins: [
		new HtmlWebpackPlugin(htmlPluginConfig)
	]
};

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins = [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new HtmlWebpackPlugin(Object.assign(htmlPluginConfig, {
			minify: {}
		}))
	];
} else {
	module.exports.devtool = '#source-map';
}
