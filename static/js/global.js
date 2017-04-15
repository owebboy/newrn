var requester = require('./requester');
var interface = require('./interface');

const body = document.querySelector('.articles')
const logo = document.querySelector('.sidebar h1')

logo.addEventListener('click', function() {
  body.innerHTML = ''
  interface.updateHeader('latest news')
  requester.listTopArticles()
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
requester.listTopArticles()



window.updateArticles = function updateArticles(str) {
  window.scrollTo(0,0);
  interface.updateHeader(str)
  requester.listArticles(str, function(articles) {
    body.innerHTML = ''
    for (var i = 0; i < articles.articles.length; i++) {
      interface.article({article: articles.articles[i], source: articles.source})
    }
  })
}
