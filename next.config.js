const glob = require('glob')
module.exports = {
  webpack (cfg) {
    cfg.plugins = cfg.plugins.filter(plugin => {
      if (plugin.constructor.name === 'UglifyJsPlugin') {
        return false
      } else {
        return true
      }
    })

    return cfg
  }
}

module.exports.exportPathMap = () => {
  const pathMap = {}
  glob.sync('pages/**/*.js', { ignore: 'pages/_document.js' }).forEach(s => {
    const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/')
    pathMap[path] = { page: path }
  })
  return pathMap
}
