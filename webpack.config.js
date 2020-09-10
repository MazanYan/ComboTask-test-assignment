const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "src"),
        historyApiFallback: true,
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        rules: [
           {
               test: /\.js$/,
               exclude: /(node_modules)/,
               use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react", 
                            "@babel/preset-env",
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                        modules: true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html"
        })
    ]
};
