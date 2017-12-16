const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		// app: '../src/app.coffee'
		app: path.resolve(__dirname, '../src/app.coffee')
	},

	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, '../dist')
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		hot: true,
		overlay: true
	},
	module: {
		rules: [{
				test: /\.coffee$/,
				loader: "coffee-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
				loader: "file-loader"
			},
			// {
			// 	test: /\.(png|jsp|gif)$/,
			// 	loader: 'url-loader?limit=8192'
			// },
			// {
			// 	test: /\.(html|tpl)$/,
			// 	loader: 'html-loader'
			// },
			// {
			// 	test: /\.(woff|svg|eot|ttf|woff2)$/,
			// 	loader: 'url-loader?limit=50000'
			// }
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'app',
			filename: 'app.js',
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			inject: true
		}),
	]
};