const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = (env, args) => {
    const isProduction = args.mode === 'production'
    return{
        mode: isProduction ? 'production' : 'development',
        entry: './src/index.js',
        output: {
            filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        },
        devtool: isProduction ? false : 'eval-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets:['@babel/preset-env'],
                        }
                    }
                },           {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './public/index.html',
            }),
        ],
        devServer: {
            static: {
                directory:path.resolve(__dirname, 'dist')
            },
            port: 3000,
            open:true,
            hot: true,
        },
    }
}