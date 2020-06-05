const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      }
    ]
  },
  watch: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/build/'),
    compress: true,
    inline: true,
    host: 'localhost',
    port: 7000,
  },
}