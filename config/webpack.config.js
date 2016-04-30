const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = process.cwd();
const babelSettings = {
    extends: root + '/.babelrc'
}

module.exports = {
    entry: root + '/src/app.js',
    devtool: 'source-map',
    resolve: {
        root: 'src',
        extensions: ['', '.js'],
        modulesDirectories: [root + '/node_modules']
    },
    resolveLoader: {
        root: [root + '/node_modules']
    },
    output: {
        path: `${root}/dist`,
        filename: `bundle.js`
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel?' + JSON.stringify(babelSettings),
            exclude: /node_modules/
        }]
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     "React": "react",
        //     "ReactDOM": "react-dom"
        // }),
        new HtmlWebpackPlugin({
            template: root + '/src/index.html'
        })
    ]
};