const BASE_DIR = __dirname + '/app';
const EXCLUDE = /node_modules/;

module.exports = {
  context: BASE_DIR,

  resolve: { root: BASE_DIR },

  entry: 'main.js',

  output: {
    filename: 'build/orbo-app.js',
  },

  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!autoprefixer?{browsers:["last 2 version"]}!sass', exclude: EXCLUDE },
      { test: /\.js$/, loader: 'babel', exclude: EXCLUDE },
      { test: /\.vue$/, loader: 'vue', exclude: EXCLUDE },
      { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
    ],
  },

  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"',
    //   },
    // }),
    //
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    // }),
  ],

  devtool: '#source-map',

  babel: {
    presets: ['es2015', 'stage-1'],
    plugins: ['transform-runtime'],
  },

  vue: {
    autoprefixer: {
      browsers: ['last 2 versions'],
    },
    loaders: {
      scss: 'style!css!sass',
    },
  },

  devServer: {
    port: 3000,
    colors: true,
  },
};
