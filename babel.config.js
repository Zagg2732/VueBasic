module.exports = {

  chainWebpack : config => {
    config.plugins.delete('prefetch'); //prefetch 삭제
  },



  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
