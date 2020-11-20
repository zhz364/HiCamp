const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./frontend/hi_camp.jsx",
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx", "*"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    // loader: ["babel-loader","style-loader","css-loader"],
                    // loader: "style-loader",
                    // loader: "css-loader",
                    query: {
                        presets: ["@babel/env", "@babel/react"],
                    },
                },
            },
        ],
    },
    devtool: "source-map",
};
