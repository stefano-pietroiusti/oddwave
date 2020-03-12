import axios from 'axios'
export const state = () => ({
  articlesLoaded: false,
  // categoriesLoaded: false,
  articles: []
  // categories: []
})

export const mutations = {
  setPosts (state, data) {
    state.articlesLoaded = true
    state.articles = data
  }
  // setCategories (state, data) {
  //   state.categoriesLoaded = true
  //   state.categories = data
  // }
}

export const actions = {
  async getSetArticles ({ commit }) {
    const res = await axios.get('https://oddwavestrapi.herokuapp.com/articles')
    commit('setPosts', res.data)
  }
  // async getSetCategories ({ commit }) {
  //   const res = await axios.get('https://oddwavestrapi.herokuapp.com/categories')
  //   commit('setCategories', res.data)
  // }
}

export const getters = {
  getArticles: (state) => {
    return state
  },
  getCategories: (state) => {
    return [].concat(...state.articles.map(({ categories }) => categories.Category || []))
  },
  getArticleById: state => (id) => {
    return state.articles.find(item => item._id === id)
  }
}
