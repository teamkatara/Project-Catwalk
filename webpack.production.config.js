const path = require('path');
// const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './client/index.jsx',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    fallback: {
      extensions: ['.js', '.jsx'],
      util: require.resolve('util/'),
      zlib: require.resolve('browserify-zlib'),
    },
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
      // new CssMinimizer(),
    ],
  },
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin('common.js'),
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.UglifyJsPlugin(),
  //   new webpack.optimize.AggressiveMergingPlugin(),
  //   // new CompressionPlugin({
  //   //   asset: "[path].gz[query]",
  //   //   algorithm: "gzip",
  //   //   test: /\.js$|\.css$|\.html$/,
  //   //   threshold: 10240,
  //   //   minRatio: 0.8,
  //   // }),
  // ],
};
