module.exports = {
  "pages": {
    "index": {
      "entry": "src/main.js",
      "title": "Blogs"
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
  "devServer": {
    "port": 8888,
    "disableHostCheck": true
  },
  "configureWebpack": {
    "devtool": "source-map"
  }
}