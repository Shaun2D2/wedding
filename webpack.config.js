const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const templateContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leslie & Shaun: Wedding</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
`

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 5000,
                    },
                  },
                ],
            },
        ],    
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};