'use strict';
const cfg = require('./webpack.config');

module.exports = {
  stories: [
    '../stories/**/*.story.tsx'
  ],
  webpackFinal: config => {
    return {
      ...config,
      module: {
        ...cfg.module,
        rules: cfg.module.rules
      },
    }
  }
}