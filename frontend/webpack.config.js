const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {EnvironmentPlugin} = require('webpack');


function resolveCurrentDir(subPath) {
    return path.resolve(__dirname, subPath)
}

module.exports = {
    entry: {
        app: resolveCurrentDir("src/index.tsx"),
    },
    devtool: 'source-map',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {test: /\.css$/, use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader']},
            {test: /\.tsx?$/, enforce: 'pre', loader: 'tslint-loader', options: {emitErrors: true}},
            {test: /\.tsx?$/, use: 'ts-loader'},
            {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{
            from: resolveCurrentDir("public")
        }]),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new EnvironmentPlugin({
            NODE_ENV: 'dev'
        }),
    ]
};
