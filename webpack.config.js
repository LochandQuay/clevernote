module.exports = {
  entry: './frontend/clevernote.jsx',
  output: {
    path: './app/assets/javascripts',
    filename: 'bundle.js',
  },
  module: {
    noParse: /node_modules\/quill\/dist/,
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx' ]
  }
};
