const path = require('path');
const distPath = path.join(__dirname, '/');
module.exports = {
    entry: './src/main',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: distPath,
        port: 9000,
        compress: true,
        open: true,
    }


};

