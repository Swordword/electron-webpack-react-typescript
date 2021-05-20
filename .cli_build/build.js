const Webpack = require('webpack');

const mainConfig = require('./webpack.main');
const rendererConfig = require('./webpack.renderer');

const env = 'production';

function buildMain() {
  console.log('fn buildMain');
  mainConfig.mode = env;
  return new Promise((resolve) => {
    const compiler = Webpack(mainConfig);
    compiler.watch({}, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      resolve();
    });
  });
}
function buildRenderer() {
  console.log('fn buildRenderer');
  rendererConfig.mode = env;
  return new Promise((resolve) => {
    const compiler = Webpack(rendererConfig);
    compiler.watch({}, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      resolve();
    });
  });
}

function buildApp() {
  console.log('starting build your app');
  process.exit();
}

function main() {
  console.log('fn main');
  Promise.all([buildMain(), buildRenderer()]).then(() => {
    buildApp();
  });
}

main();
