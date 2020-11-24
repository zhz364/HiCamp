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
                    query: {
                        presets: ["@babel/env", "@babel/react"],
                    },
                },
            },
            {
                include:/(node_modules)/,
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            // {
            //     test: /\.css$/i,
            //     use: ["handlebars-loader", 
            //     "extract-loader",
            //     "css-loader",],
            // },
        ],
    },
    devtool: "source-map",
};
