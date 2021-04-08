const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // the output bundle won't be optimized for production but suitable for development
    mode: 'development',
    // the app entry point is /src/index.js
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        // the output of the webpack build will be in /dist directory
        path: path.resolve(__dirname, 'dist'),
        // the filename of the JS bundle will be bundle.js
        filename: 'bundle.js'
    },
    // These rules define how to deal 
    // with files with given extensions.
    // For example, .tsx files 
    // will be compiled with ts-loader,
    // a spcific loader for webpack
    // that knows how to work with TypeScript files.
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/,
            },
            {
                test:  /\.css$/i,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(woff2|woff|eot|ttf|otf)$/,
                use: ["file-loader"],
            },
        ]
    },
    // add a custom index.html as the template
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json', '.png']
    },
};