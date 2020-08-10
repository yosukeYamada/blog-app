import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser:null,
    loginStatus:false,
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
    },
    setLoginUser(state,loginUser){
      state.loginUser=loginUser
    },
    setLoginStatus(state,loginStatus){
      state.loginStatus=loginStatus
    },
    setMyArticleHistory(state,articleList){
      state.loginUser["articleHistory"]=articleList
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
    },
    setLoginUser({commit},loginUser){
      commit("setLoginUser",loginUser)
    },
    setLoginStatus({commit},loginStatus){
      commit("setLoginStatus",loginStatus)
    },
    setMyArticleHistory({commit},articleList){
      commit("setLoginStatus",articleList)
    },
    setCategoryList({commit},categoryList){
      commit("setCategoryList",categoryList)
    }

  },
  modules: {
  },
  plugins: [createPersistedState()]
})
