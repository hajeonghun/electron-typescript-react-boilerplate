import path from 'path';
import HTMLWebpackPlugin from "html-webpack-plugin"
import * as url from 'url';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
console.log('test:', path.resolve(__dirname, "./src/"))
export default {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve("build"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/")
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new BundleAnalyzerPlugin()
  ]
}
