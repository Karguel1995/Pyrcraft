const { merge } = require('webpack-merge');

const commonConfiguration = require('./webpack/common');
const fileLoader = require('./webpack/file')

module.exports = (_env, { mode }) => {
  
  const properlyConfig = require(`./webpack/${mode}`);
  const mergedConfig = merge(commonConfiguration, properlyConfig, fileLoader);

  return mergedConfig;
}