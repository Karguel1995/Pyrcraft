const path = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path(__dirname, '..', 'src');

module.exports = {
    entry: {
        index: path(__dirname, '..', 'src', 'index.js'),
    },
    output: {
        filename: '[name].[contenthash:6].js',
        path: path(__dirname, '..', 'build'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                  loader: 'file-loader',
                  options: {
                    limit: 8192,
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'static/images',
                  },
                },
              },
        ]
    },
    plugins: [
      new HtmlWebpackPlugin ({
        template: path(__dirname, '..', 'public', 'index.html'),
      })
    ]
}