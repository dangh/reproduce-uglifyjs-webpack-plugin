module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        browsers: 'last 2 versions'
      },
      modules: false,
      debug: true
    }]
  ]
}
