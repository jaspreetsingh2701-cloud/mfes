const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  resolve: {
    extensions: [".jsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.js'
      },
      shared: {
        'react': {
          singleton: true
        },
        'react-dom': {
          singleton: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],

  devServer: {
    port: 3002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};