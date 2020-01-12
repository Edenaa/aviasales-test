let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].js',
    publicPath: 'dist/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
                "@babel/plugin-transform-react-jsx",
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      },
      {
        test: /\.module\.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: "[local]___[sha1:hash:hex:7]"
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { 
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: [
          {
            loader:'url-loader',
            options: {
              limit: false,
              outputPath: 'img',
              name: "[name].[hash].[ext]",
            },
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '~c': path.resolve(__dirname, 'src/components'),
      '~p': path.resolve(__dirname, 'src/pages'),
      '~s': path.resolve(__dirname, 'src/store')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  }
};

module.exports = conf;