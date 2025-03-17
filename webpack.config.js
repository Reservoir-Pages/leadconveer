const isProd = process.env.NODE_ENV === "prod";
const full = process.argv.includes("--full");

export const webpackConfig = {
	mode: !isProd ? "development" : full ? "development" : "production",
	output: {
		filename: "main.js",
	},
	module: {
		rules: [
			{
				test: /\.m?js/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
				resolve: {
					fullySpecified: false,
				},
			},
			// TODO Style Loaders
			{
				test: /\.(scss|css)$/,
				// use: ["style-loader", "css-loader"],
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
			},
			// {
			// 	test: /\.woff2?$/i,
			// 	type: "asset/resource",
			// 	dependency: { not: ["url"] },
			// },
		],
	},
};
