module.exports = {
  target: 'electron-renderer',
  entry: './app/src/index.js',
  output: {
    path: __dirname + '/app/build',
    publicPath: 'build/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-react']
          }
      },
      {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
      },
      {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          query: {
              name: '[name].[ext]?[hash]'
          }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
}
