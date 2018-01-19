module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        electron: '1.7'
      },
      modules: false,
      debug: true
    }],
    '@babel/stage-0',
    // ['@babel/react', {
    //   development: process.env.NODE_ENV !== 'production'
    // }],
    // '@babel/flow'
  ],
  plugins: [
    // 'babel-plugin-dev-expression',
    // 'lodash',
    '@babel/transform-runtime',

    // Optimization: hoist JSX that never changes out of render()
    // 'babel-plugin-transform-react-constant-elements',
    // 'babel-plugin-transform-react-inline-elements',
    // ['babel-plugin-transform-react-remove-prop-types', {
    //   removeImport: true
    // }]
    // Disabled because of error: Module build failed: Duplicate declaration "props"
    // 'babel-plugin-transform-react-pure-class-to-function'
  ]
}
