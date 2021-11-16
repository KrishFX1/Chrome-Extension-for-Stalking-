'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = (env, argv) => merge(common, {
  entry: {
    contentScript: PATHS.src + '/content.js',
  
  },
  node: {
    fs: 'empty',
    child_process : "empty",
    html2canvas : 'empty',
   net : "empty",
   tls : "empty"

  } , 
  devtool: argv.mode === 'production' ? false : 'source-map',
});


module.exports = config;
