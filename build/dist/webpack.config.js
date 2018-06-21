/* eslint-disable global-require */
/*
Checklist:

-Loaders:
  - Babel
  - HTML
  - CSS / SCSS / SASS
  - URL
  - FILE
  - TYPESCRIPT
  - THREAD

-Plugins:
  - Dev Server
  - Hot Reloading
  - CSS refinement (POSTCSS, Prefixer, etc)
  - Minification
  - Uglification
  - Image optimization (?)
  - Polyfills (Fetch, etc -- see react-scripts)

- Module aliasing for shared
- Output config
- Entrypoint config
- Symlink handling


*/
var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var MinifyPlugin = require('babel-minify-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
module.exports = function (env) {
    var config = {
        // You can pass in --env.development to the webpack-cli to toggle into development mode.
        mode: env && env.development ? 'development' : 'production',
        entry: {
            main: [
                require.resolve('./webpack.polyfills.js'),
                path.resolve(__dirname, 'src/public/index.tsx'),
            ],
        },
        output: {
            filename: 'static/js/[chunkhash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        stats: 'errors-only',
        // WEBPACK PLUGINS CONFIG
        plugins: [
            // Config for HTML Webpack Plugin (goes with HTML Loader)
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'src/public/index.html'),
                filename: 'index.html',
            }),
            // Works with CSS Loader to extract CSS to its own file
            new MiniCssExtractPlugin({
                filename: 'static/css/[chunkhash].css',
                chunkFilename: 'static/css/[chunkhash].css',
            }),
        ],
        // WEBPACK RESOLVER CONFIG
        resolve: {
            modules: [path.resolve(__dirname, 'node_modules')],
            alias: {
                'operator_common': path.resolve(__dirname, 'src/shared/operator_common/'),
                'operator_theme': path.resolve(__dirname, 'src/shared/operator_theme/'),
                'protos': path.resolve(__dirname, 'src/shared/protos/'),
                '@App': path.resolve(__dirname, '.'),
            },
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            symlinks: false,
        },
        resolveLoader: {
            modules: [path.resolve(__dirname, 'node_modules')],
        },
        // DEVSERVER SETTINGS (webpack-dev-server)
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            historyApiFallback: true,
            overlay: true,
            port: 3000,
            stats: 'normal',
            open: true,
        },
        // Vendor chunking
        optimization: {
            runtimeChunk: false,
            splitChunks: {
                cacheGroups: {
                    default: false,
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor_app',
                        chunks: 'all',
                        minChunks: 2,
                    },
                },
            },
        },
        // LOADERS AND RULES CONFIG
        module: {
            rules: [
                // Type Script
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: 'babel-loader' },
                        { loader: 'ts-loader',
                            options: {
                            // transpileOnly: true, // type checking done by ForkTsCheckerWebpackPlugin
                            // happyPackMode: true
                            }
                        },
                        { loader: 'thread-loader' }
                    ]
                },
                // Babel Loader
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'thread-loader'],
                },
                // File Loader
                // Normal images within project
                {
                    test: /\.(png|jpg|gif|svg|ico)$/,
                    exclude: /node_modules\/fontawesome/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'static/images/[name].[ext]',
                            },
                        },
                    ],
                },
                // Fonts that are part of the project.
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'static/fonts/[name].[ext]',
                            },
                        },
                    ],
                },
                // SASS and CSS Loading
                // TODO: Configure browserlistrc
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () { return [
                                    require('autoprefixer'),
                                ]; },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    __dirname,
                                ],
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () { return [
                                    require('autoprefixer'),
                                ]; },
                            },
                        },
                    ],
                },
                // HTML Loader
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: true },
                        },
                    ],
                },
            ],
        },
    };
    // Analyzes the bundles in a visual fashion if you add the flag --env.analyze
    if (env && env.analyze) {
        config.plugins.push(new BundleAnalyzerPlugin());
    }
    return config;
};
//# sourceMappingURL=webpack.config.js.map