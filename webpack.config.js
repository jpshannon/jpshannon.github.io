'use strict';

const path = require('path');
const { optimize: { splitChunks }, ProvidePlugin } = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlPdfPlugin = require('html-pdf-plugin');
const config = require('./config');


const ensureArray = (config) => config && (Array.isArray(config) ? config : [config]) || []
const when = (condition, config, negativeConfig) =>
	condition ? ensureArray(config) : ensureArray(negativeConfig)

module.exports = ({ production, server, coverage } = {}) => ({
	mode: production ? 'production' : 'development',
	devtool: production ? 'source-map' : 'cheap-module-eval-source-map',
	entry: {
		app: config.appEntry,
		vendor: config.vendors,
	},
	output: {
		path: config.path.outDir
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: config.path.nodeModulesDir
			},
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract('css-loader!sass-loader')
			},
			{
				test: /\.hbs/,
				use: {
					loader: 'handlebars-loader',
					query: {
						partialDirs: config.path.partials,
						helperDirs: config.path.helpers
					}
				} ,

			},
			{ test: /\.json$/i, use: 'json-loader' },
			{ test: require.resolve('jquery'), use: 'expose-loader?$!expose-loader?jQuery' },
			{ test: require.resolve('handlebars'), use: 'unlazy-loader!expose-loader?Handlebars' },
			{ test: /\.(png|gif|jpg|cur)$/i, use: { loader: 'url-loader', options: { limit: 8192 } } },
			{ test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, use: { loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } } },
			{ test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, use: { loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } } },
			{ test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, use: 'file-loader' }
		]
	},
	plugins: [
		new ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default'] // for bootstrap 4
		}),
		new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
		// ...when(production, new CommonsChunkPlugin({
		// 	name: 'common'
		// })),
		new HtmlWebPackPlugin({
			template: config.resume.template,
			filename: production ? '../index.html' : 'index.html',
			resume: require(config.path.resume),
			resumeConfig: config.resume.options
		}),
		...when(production, new HtmlPdfPlugin(config.resume.options))
	],
})