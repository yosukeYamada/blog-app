import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleList:[],
    categoryList:[]
  },
  mutations: {
    setArticleList(state,articleList){
      state.articleList = articleList
    },
    addArticleList(state,article){
      state.articleList.push(article)
    },
    setCategoryList(state,categoryList){
      state.categoryList=categoryList
    },
    addCategoryList(state,category){
      state.categoryList.push(category)
    }
  },
  actions: {
    setArticleList({commit},articleList){
      commit("setArticleList",articleList)
    },
    addArticleList({commit},article){
      commit("addArticleList",article)
    },
    setCategoryList({commit},categoryList){
      commit("setCategoryList",categoryList)
    },
    addCategoryList({commit},category){
      commit("addCategoryList",category)
    }

  },
  modules: {
  }
})
