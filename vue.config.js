const path = require('path');

module.exports = {
  chainWebpack(config) {
    config
      .entry('app')
      .clear()
      .add('./src/core/main.js')
      .end();
    config.resolve.alias
      .set('~', path.join(__dirname, './src'))
      .set('@', path.join(__dirname, './src/core'))
      .set('#', path.join(__dirname, './src/modules'));
  },
  configureWebpack: {
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
    },
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [
            path.resolve(__dirname, 'src/core/')
          ],
          indentedSyntax: true,
        },
        additionalData: '@import "~@/assets/sass/main.scss"',
      },
    },
  },
  assetsDir: '@/assets/',
};
