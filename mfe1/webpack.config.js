// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import HtmlWebpackPlugin from 'html-plugin'; // Requires: npm i -D html-webpack-plugin

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],

  devServer: {
    port: 3001,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};

// export default {
//   // 1. Management Mode
//   mode: 'development', // 'production' or 'development'

//   // 2. The entry point file where Webpack starts building its dependency graph
//   entry: './src/index.js',

//   // 3. Where the bundled assets should be emitted
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].[contenthash].bundle.js',
//     clean: true, // Automatically clears the dist folder before every build
//   },

//   // 4. Loaders to process non-JavaScript files (CSS, Images, Babel, etc.)
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'], // Injects CSS into DOM
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource', // Handles images natively
//       },
//       {
//         test: /\.m?js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader', // Transpiles modern JS for older browsers
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },

//   // 5. Plugins to extend functionality (HTML generation, optimization, etc.)
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html', // Automatically injects script tags into this HTML template
//     }),
//   ],

//   // 6. Source maps for easier debugging in development
//   devtool: 'inline-source-map',

//   // 7. Local development server configurations
//   devServer: {
//     static: './dist',
//     port: 3001,
//     hot: true, // Enable Hot Module Replacement
//   },
// };
