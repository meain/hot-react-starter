const rewireReactHotLoader = require('react-app-rewire-hot-loader')
// const rewirePreact = require('react-app-rewire-preact')
// const rewireMobX = require('react-app-rewire-mobx')

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env)
  // config = rewirePreact(config, env)
  // config = rewireMobX(config, env)
  return config
}
