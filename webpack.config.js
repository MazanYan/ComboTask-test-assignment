const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
/*const HTMLplugin = require('html-webpack-plugin');

const rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
    }
];
    
module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: { rules },
    plugins: [
        new HTMLplugin({
            template: './public/index.html'
        })
    ]
}*/



module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
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
                template: "./public/index.html"
            })
    ]
};