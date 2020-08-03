import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleList:[],
    categoryList:[],
    uniqueCategoryList:[]
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
    },
    setUniqueCategoryList(state,uniqueCategoryList){
      state.uniqueCategoryList=uniqueCategoryList
    },
    addUniqueCategoryList(state,uniqueCategory){
      state.uniqueCategoryList.push(uniqueCategory)
    }
  },
  actions: {
    setArticleList({commit},articleList){
      commit("setArticleList",articleList)
    },
    addArticleList({commit},article){
      commit("addArticleList",article)
    },
    setUniqueCategoryList({commit},uniqueCategoryList){
      commit("setUniqueCategoryList",uniqueCategoryList)
    },
    addUniqueCategoryList({commit},uniqueCategory){
      commit("addUniqueCategoryList",uniqueCategory)
    }

  },
  modules: {
  }
})
