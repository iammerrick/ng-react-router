module.exports = {
    entry: './src/bootstrap',
    output: {
        path: 'compiled',
        filename: '[name].js'
    },
    module: {
      loaders: [
        { test: /src(.)+\.js/, loader: 'jsx?harmony' }
      ]
    },
    devtool: 'inline-source-map'
}