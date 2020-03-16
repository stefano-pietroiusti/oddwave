// import axios from 'axios'
export const state = () => ({
  loaded: false,
})

export const mutations = {
  setLoaded (state, data) {
    state.loaded = data
  }
}

export const actions = {
  async nuxtServerInit({dispatch }) {
    await dispatch('strapi/getSetArticles')
    await dispatch('strapi/getSetCategories')
  }
}
