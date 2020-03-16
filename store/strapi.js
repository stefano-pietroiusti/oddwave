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
    if (this.getArticlesCount === 0) {
      const res = await axios.get(`${process.env.cmsBaseUrl}/articles`)
      commit('setPosts', res.data)
    }
  },
  async getSetCategories ({ commit }) {
    if (this.getCategoriesCount === 0) {
      const res = await axios.get(`${process.env.cmsBaseUrl}/categories`)
      commit('setCategories', res.data)
    }
  }
}

export const getters = {
  getArticlesCount: (state) => {
    return state.articles.length
  },
  getArticlesCountByCategory: state => (id) => {
    return state.articles.filter(article => article.categories.find(category => String(category.Category) === id)).length
  },
  getCategoriesCount: (state) => {
    return state.categories.length
  },
  getArticles: (state) => {
    return state
  },
  getCategories: (state, getters) => {
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
    return state.articles.filter(article => article.categories.find(category => String(category.Category) === id))
  },
  getArticleById: state => (id) => {
    return state.articles.find(item => item.Url + '-' + item.id === id)
  }
}
