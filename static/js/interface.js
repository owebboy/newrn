

const sidebar = document.querySelector('.sidebar')
const body = document.querySelector('.articles')
const title = document.querySelector('title')

module.exports = {
  createListItem: function(val) {
    var self = this
    var listItem = document.createElement('p')
    listItem.innerHTML = val.name
    listItem.classList.add('list-item')
    listItem.addEventListener('click', function() {
      window.updateArticles(val.id)
    })
    sidebar.appendChild(listItem)
  },
  article: function(val) {
    var art = val.article
    var src = val.source
    var wrapper = document.createElement('article')
    var article = document.createElement('a')
    article.classList.add('article')
    article.href = art.url

    var title = document.createElement('h3')
    title.textContent = art.title
    article.appendChild(title)

    var meta = document.createElement('p')
    meta.classList.add('meta')
    var author = document.createElement('span')
    if (art.author) {
      author.textContent = art.author + ' - '
    }
    meta.appendChild(author)
    var date = document.createElement('span')
    date.textContent = new Date(art.publishedAt).toLocaleDateString()
    meta.appendChild(date)
    article.appendChild(meta)

    var description = document.createElement('p')
    description.textContent = art.description
    article.appendChild(description)
    wrapper.appendChild(article)

    var image = document.createElement('img')
    if (art.urlToImage) {
      image.src = art.urlToImage
      image.alt = art.description
    }
    wrapper.appendChild(image)

    body.appendChild(wrapper)
  },
  updateHeader: function(str) {
    var header = document.querySelector('header')
    title.textContent = 'newrn | ' + str
    header.textContent = str
    localStorage.currentSource = str
  },
  loader: {
    show: function() {
      var loading = document.createElement('div')
      loading.classList.add('loading')
      var image = document.createElement('img')
      image.src = 'static/img/radio.svg'
      loading.appendChild(image)
      body.appendChild(loading)
    },
    hide: function() {
      var loading = document.querySelector('.loading')
      body.removeChild(loading)
    }
  }
}
