var path = require('path');
var sass = require('node-sass');



var config = {
    entry: './main.js',
    output: {
        filename: 'index.js', // place where bundled app will be served
        //path: path.join(__dirname,'/public/assets/'),
        //publicPath:'assets/'
    },
    devServer: {
        inline: true, // autorefresh
        port: 8080 // development port server
    },
    module: {
        loaders: [
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.jsx?$/, // search for js files
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'] // use es2015 and react
                }
            }
        ]
    }
}

module.exports = config;