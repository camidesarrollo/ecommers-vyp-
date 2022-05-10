import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state: {
    category: {
      data: {},
      loading: false,
    },
  },
  getters: {},
  actions: {

    getDataCategories({commit}){
      return axiosClient.get('/getDataCategories')
      .then((response) => {
        console.log(response);
        commit('setCategories', response.data)
      })
    }
  },
  mutations: {
    setCategories: (state, category) => {
      state.category.data = category;
    },
  },
  modules: {},
});

export default store;
