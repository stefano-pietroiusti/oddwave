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
  async nuxtServerInit({dispatch, commit }) {
    commit('setLoaded', true)
    await dispatch('articles/getSetPosts');
    // return Promise.all([
    //   dispatch('articles/getSetPosts', context)
    // ]);

    // return axios.get('https://deliver.kontent.ai/d09c9569-7021-0070-d917-10246623ee2e/items').then((res) => {
    //     commit('articles/setPosts', res.data)
    //   })

  }
}
