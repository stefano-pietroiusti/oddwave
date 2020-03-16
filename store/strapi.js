import axios from 'axios'
export const state = () => ({
  articlesLoaded: false,
  categoriesLoaded: false,
  articles: [],
  categories: []
})

export const mutations = {
  setPosts (state, data) {
    if (data) {
      state.articlesLoaded = true
      state.articles = data
    }
  },
  setCategories (state, data) {
    if (data) {
      state.categories = data
      state.categoriesLoaded = true
    }
  }
}

export const actions = {
  async getSetArticles ({ commit }) {
    const res = await axios.get(`${process.env.cmsBaseUrl}/articles`)
    commit('setPosts', res.data)
  },
  async getSetCategories ({ commit }) {
    const res = await axios.get(`${process.env.cmsBaseUrl}/categories`)
    commit('setCategories', res.data)
  }
}

export const getters = {
  getArticlesCountByCategory: state => (id) => {
    return state.articles.filter(article => article.categories.find(category => String(category.Category) === id)).length
    // return state.articles.find(item => item.categories.some(item => item.Category === category)).length
  },
  getCategoriesCount: (state) => {
    return state.categories.length
  },
  getArticles: (state) => {
    return state
  },
  getCategories: (state, getters) => {
    // return [].concat(...state.articles.map(({ categories }) => categories.Category || []))
    return state.categories.map(item => (
      {
        category: item.Category,
        imageUrl: `${process.env.cmsBaseUrl}` + item.Image[0].url,
        articlesCount: getters.getArticlesCountByCategory(item.Category) || 0,
        articles: item.articles.map(a => ({
          title: a.Title,
          url: '/blog-articles/' + item.Category + '/' + a.Url + '-' + a.id + '/',
          description: a.Metadata.MetaDescription
        }
        ))
      }
    ))
  },
  getArticlesByCategory: state => (id) => {
    // console.log(state.articles.filter(article => article.categories.find(category => String(category.Category) === id)))
    return state.articles.filter(article => article.categories.find(category => String(category.Category) === id))
  },
  getArticleById: state => (id) => {
    // console.log(id)
    // console.log([].concat(state.articles.find(item => item.Url + '-' + item.id === id)))
    return state.articles.find(item => item.Url + '-' + item.id === id)
  }
}
