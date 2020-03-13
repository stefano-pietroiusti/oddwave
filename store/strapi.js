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
  getArticles: (state) => {
    return state
  },
  getCategories: (state) => {
    // return [].concat(...state.articles.map(({ categories }) => categories.Category || []))
    return state.categories.map(item => (
      {
        category: item.Category,
        imageUrl: `${process.env.cmsBaseUrl}` + item.Image[0].url
      }
    ))
  },
  getArticleById: state => (id) => {
    return state.articles.find(item => item._id === id)
  }
}
