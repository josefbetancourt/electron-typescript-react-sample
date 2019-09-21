var path = require('path');

// define child rescript
module.exports = (config) => {
  config.target = 'electron-renderer';
  config.plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ];
  config.node: {
    __dirname: true,
  };
  
  return config;
};

