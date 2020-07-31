import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleList:[]
  },
  mutations: {
    setArticleList(state,articleList){
      state.articleList = articleList
    },
    addArticleList(state,article){
      state.articleList.push(article)
    }
  },
  actions: {
    setArticleList({commit},articleList){
      commit("setArticleList",articleList)
    },
    addArticleList({commit},article){
      commit("addArticleList",article)
    }

  },
  modules: {
  }
})
