const path = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const destinationPath = path(__dirname, '..', 'build');
const sourcePath = path(__dirname, '..', 'src');

module.exports = {
    entry: {
        index: path(sourcePath, 'index.js'),
    },
      output: {
      path: path(destinationPath),
      chunkFilename: 'js/[name].[contenthash:6].js',
      filename: '[name].[contenthash:6].js',
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