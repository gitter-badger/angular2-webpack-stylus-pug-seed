var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "vendor": "./src/app/vendor",
        "app": "./src/app/boot"
    },
    output: {
        path: 'bin',
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.pug|jade$/,
                loader: 'pug-html-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "./vendor.bundle.js"
        }),
        new HtmlWebpackPlugin({
            title: 'My fist Angular 2 app',
            template: 'src/index.html',
            hash: true
        })
    ]
}
