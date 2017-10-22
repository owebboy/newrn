var request = require('browser-request')
var interface = require('./interface');

module.exports = {
  /// request sources
  listSources: function(cb) {
    request('http://beta.newsapi.org/v2/sources?apiKey=0ef6be55c02645629c2ae9ffedd2a9b4&language=en', function(er, res) {
      cb(JSON.parse(res.body).sources)
    })
  },

  /// request a source's articles
  listArticles: function(source, cb) {
    request('http://beta.newsapi.org/v2/top-headlines?apiKey=0ef6be55c02645629c2ae9ffedd2a9b4&sources=' + source, function(er, res) {
       cb(JSON.parse(res.body))
    })
  },

  // request top sources of the articles
  listTopArticles: function(cb) {
    var self = this;
    this.listSources(function(sources) {
      for (var i = 0; i < sources.length; i++) {
        self.listArticles(sources[i].id, function(articles) {
          interface.article({ article: articles.articles[0], source: articles.source }, true);
        })
        if (i === sources.length - 1) {
          return cb()
        }
      }
    })
  },

  // get current weather
  getCurrentWeather: function(lat, long) {
    request('http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + long + '&cnt=1&appid=9780ce9c26ea752c06e528c843918540&units=imperial', function(er, res) {
      return interface.setMobileHeader(JSON.parse(res.body).list[0].main.temp, JSON.parse(res.body).list[0].name)
    })
  }
}
