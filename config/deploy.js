/* eslint-env node */
'use strict';

module.exports = function (deployTarget) {
  const ENV = {
    build: {},

    git: {
      repo: 'git@github.com:coolgirl-multicart/coolgirl-frontend.git',
    },

    'git-ci': {
      enabled: true,
      deployKey: process.env.SECRET_KEY,
    },
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
    ENV.rootURL = '/coolgirl-frontend/';
    ENV.locationType = 'hash';
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
