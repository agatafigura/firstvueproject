module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/firstvueproject/'
  : '/',
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
