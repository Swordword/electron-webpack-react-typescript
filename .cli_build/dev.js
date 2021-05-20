// Native
const path = require('path');
const { spawn } = require('child_process');

// Package
const electron = require('electron');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const mainConfig = require('./webpack.main');
const rendererConfig = require('./webpack.renderer');

const env = process.env.NODE_ENV;
console.log('env', env);

/**
 * build main process
 */
function buildMain() {
  console.log('fn buildMain');
  return new Promise((resolve) => {
    mainConfig.mode = 'development';
    const compiler = Webpack(mainConfig);

    compiler.watch({}, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('buildMain resolve');
      resolve();
    });
  });
}

/**
 * build renderer process
 */
function buildRenderer() {
  console.log('fn buildRenderer');
  rendererConfig.mode = 'development';
  const compiler = Webpack(rendererConfig);
  const devServerOptions = {
    ...rendererConfig.devServer, contentBase: path.resolve(__dirname, '../dist'),
    // open: true,
  };
  const server = new WebpackDevServer(compiler, devServerOptions);
  server.listen(8765, () => {
    console.log('Starting server on http://localhost:8765');
  });
}

function launch() {
  const args = [path.resolve(process.cwd(), 'dist/main.js')];
  const mainProcess = spawn(electron, args);
  mainProcess.on('close', () => {
    // exit console
    process.exit();
  });
}

/**
 * main function
 */
function main() {
  buildRenderer();
  buildMain().then(() => {
    launch();
  });
}

main();
