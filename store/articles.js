import axios from 'axios'
export const state = () => ({
  loaded: false,
  posts: []
})

export const mutations = {
  setPosts (state, data) {
    state.loaded = true
    state.posts = data
  }
}

export const actions = {
  async getSetPosts ({ commit }) {
    const res = await axios.get('https://deliver.kontent.ai/d09c9569-7021-0070-d917-10246623ee2e/items')
    commit('setPosts', res.data.items)
  }
  // getSetPostsPromise ({ commit }) {
  //   this.$deliveryClient.items()
  //     .type('article')
  //     .toPromise()
  //     .then(response =>
  //       commit('setPosts', response.data.items)
  //     )
  // }
}

export const getters = {
  getPosts: (state) => {
    return state
  },
  getRoutes: (state) => {
    return [].concat(...state.posts.map(({ elements }) => elements.url.value || []))
  },
  getArticleById: state => (id) => {
    return state.posts.find(item => item.elements.url.value.id === id)
  }
}
