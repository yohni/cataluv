import Vuex from 'vuex'

const baseApi = 'https://cataluv-94a78.firebaseio.com'

const createStore = () => {
  return new Vuex.Store({
    state: {
      categories: [],
      products: [],
    },

    getters: {
      getCategoryById: (state) => (id) => {
        return state.categories.find((item) => item.id === id)
      },
    },

    actions: {
      async fetchCategories({ commit }) {
        const resp = await this.$axios.get(`${baseApi}/category.json`)
        if (resp) {
          commit('setCategories', resp.data)
        }
      },
      async fetchProducts({ commit }) {
        const resp = await this.$axios.get(`${baseApi}/product.json`)
        if (resp) {
          commit('setProducts', resp.data)
        }
      },
    },

    mutations: {
      setCategories(state, categories) {
        state.categories = categories
      },
      setProducts(state, products) {
        state.products = products
      },
    },
  })
}
export default createStore
