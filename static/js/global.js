var requester = require('./requester');
var interface = require('./interface');

const body = document.querySelector('.articles')
const logo = document.querySelector('.sidebar h1')
const loading = document.querySelector('.loading')

logo.addEventListener('click', function() {
  body.innerHTML = ''
  interface.loader.show()
  interface.updateHeader('latest news')
  requester.listTopArticles(function() {
    interface.loader.hide()
  })
})

// LIST
// creates a list of each source
requester.listSources(function(sources) {
  for (var i = 0; i < sources.length; i++) {
    interface.createListItem(sources[i])
  }
})

// BODY
interface.updateHeader('latest news')
interface.loader.show()
requester.listTopArticles(function() {
  interface.loader.hide()
})



window.updateArticles = function updateArticles(str) {
  window.scrollTo(0,0);
  interface.updateHeader(str)
  body.innerHTML = ''
  interface.loader.show()
  requester.listArticles(str, function(articles) {
    for (var i = 0; i < articles.articles.length; i++) {
      interface.article({article: articles.articles[i], source: articles.source})
      if (i === articles.articles.length - 1) {
        interface.loader.hide()
      }
    }
  })
}
