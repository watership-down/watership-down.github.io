var path = require("path");
var fs = require("fs");
var url = require("url");
var webpack = require("webpack");

var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
	return path.resolve(appDirectory, relativePath);
}

module.exports = {
	entry: [
		"whatwg-fetch",
		resolveApp("./src/assets/js/app.js"),
	],
	devtool: "source-map",
	output: {
		path: resolveApp("./src/assets/js/"),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader", // ‘babel-loader’ is also a legal name to reference
				query: {
					presets: ["react", "env"]
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	]
};
