

const sidebar = document.querySelector('.sidebar')
const modalContent = document.querySelector('.modal-content')
const body = document.querySelector('.articles')
const title = document.querySelector('title')
const mobileWeather = document.querySelector('.mobileWeather')

sidebar.addEventListener('click', function(e) {
  if(e.target && e.target.classList.contains('list-item')) {
    window.updateArticles(e.target.id)
	}
})
modalContent.addEventListener('click', function(e) {
  if(e.target && e.target.classList.contains('list-item')) {
    window.updateArticles(e.target.id)
	}
})

module.exports = {
  createListItem: function(val, source) {
    var self = this
    var listItem = document.createElement('p')
    listItem.innerHTML = val.name
    listItem.classList.add('list-item')
    listItem.id = val.id
    sidebar.appendChild(listItem.cloneNode(true))
    modalContent.appendChild(listItem.cloneNode(true))
  },
  article: function(val, source) {
    console.log(val);
    var art = val.article
    var src = val.article.source.name
    var wrapper = document.createElement('article')
    var article = document.createElement('a')
    article.classList.add('article')
    article.href = art.url

    if (source) {
      var source = document.createElement('p')
      source.classList.add('article-source')
      source.textContent = src
      article.appendChild(source)
    }

    var title = document.createElement('h3')
    title.innerHTML = art.title
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
    header.textContent = str.replace(/-/g, ' ')
    localStorage.currentSource = str
  },
  setMobileHeader: function(deg, name) {
    mobileWeather.innerHTML = '<h3>' + deg.toFixed(0) + '&deg; F </h3>' + name
  },
  weather: {
    loader: {
      show: function() {
        var img = document.createElement('img')
        img.classList.add('mobileLoader')
        img.src = '/static/img/radio.svg'
        img.width = 32
        img.height = 32
        mobileWeather.appendChild(img)
      },
      hide: function() {
        mobileWeather.removeChild(document.querySelector('.mobileLoader'))
      }
    }
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
