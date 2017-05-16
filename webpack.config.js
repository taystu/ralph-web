var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');



const VENDOR_LIBS = ['jquery','react','react-router', 'react-dom'];

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: VENDOR_LIBS
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		port: 8080,
	},
	performance: {
		// suppresses size warnings
  	hints: false
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['css-loader', 'postcss-loader'],
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'postcss-loader']
				})
			},
			{
				test: /\.scss$/,
				use: ['css-loader', 'postcss-loader', 'sass-loader'],
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'postcss-loader', 'sass-loader']
				})
			},
			{
				test: /\.(jpe?g|JPG|png|PNG|gif|svg)$/,
				use: [
					'file-loader',
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		})
	]
}

