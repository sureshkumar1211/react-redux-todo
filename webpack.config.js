const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
    //Entry file actully we wrote the code for developement 
    entry: './src/index.js',
    // Output file serving to dev-server and production
    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new copyPlugin([{
            from: "src/img/favicon.ico",
            to: "img/"
        }])
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx", ".scss", ".sass"]
    }
}