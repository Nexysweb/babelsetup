// babel.config.js
const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-transform-modules-commonjs',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-async-to-generator',
  '@babel/plugin-transform-arrow-functions',
  ['@babel/plugin-transform-runtime', {
    corejs: 3,
    helpers: true,
    regenerator: true,
    useESModules: false
  }]
];

const presets = [
  '@babel/preset-env'
];

module.exports = {
  presets,
  plugins,
};
