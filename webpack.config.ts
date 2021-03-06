/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import HtmlWebPack from 'html-webpack-plugin';
import ReactRefreshWebpack from '@pmmmwh/react-refresh-webpack-plugin';
import WebpackMessages from 'webpack-messages';
import Dotenv from 'dotenv-webpack';


// plugins declarations
const HotPlugin = new webpack.HotModuleReplacementPlugin();
const FastRefreshPlugin = new ReactRefreshWebpack();
const DotEnvPlugin = new Dotenv();
const WebpackMessagesPlugin = new WebpackMessages({
  logger: (str: string) => console.log(`=> ${str}`),
});
const htmlPlugin = new HtmlWebPack({
  template: path.resolve(__dirname, 'public', 'index.html'),
  filename: './index.html',
});

// variables
const isDevelopment = process.env.NODE_ENV !== 'production';

// the config
const config: webpack.Configuration = {
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    index: {
      import: path.resolve(__dirname, 'src/index.tsx'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(mp4|svg|png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  plugins: [
    htmlPlugin,
    DotEnvPlugin,
    isDevelopment && WebpackMessagesPlugin,
    isDevelopment && HotPlugin,
    isDevelopment && FastRefreshPlugin,
  ].filter(Boolean),
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 4000,
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    },
  },
};

export default config;
