'use strict';
// {app_root}/config/plugin.js

/** @type Egg.EggPlugin */
module.exports = {
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
