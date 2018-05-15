const {series, crossEnv, concurrent, rimraf} = require('nps-utils');
const config = require('./config');

module.exports = {
  scripts: {
    default: 'nps webpack',
    test: 'echo "Error: no test specified" && exit 1',
    build: 'nps webpack.build',
    webpack: {
      default: 'nps webpack.server',
      build: {
        before: rimraf(config.path.outDir),
        default: 'nps webpack.build.production',
        development: {
          default: series(
            'nps webpack.build.before',
            'webpack --progress -d'
          ),
          serve: series.nps(
            'webpack.build.development',
            'serve'
          ),
        },
        production: {
          default: series(
            'nps webpack.build.before',
            crossEnv('NODE_ENV=production webpack --progress -p --env.production --env.watermark')
          ),
          serve: series.nps(
            'webpack.build.production',
            'serve'
          ),
        }
      },
      server: {
        default: `webpack-dev-server -d --inline --env.server`,
        extractCss: `webpack-dev-server -d --inline --env.server`,
        hmr: `webpack-dev-server -d --inline --hot --env.server`
      },
    },
    serve: 'http-server '+ config.outDir +' --cors'
  }
};
