import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import loginUser from "./loginUser/index.js";
import initialState from "./state.js";
import firebase from "firebase";
import router from "../router/index.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: initialState,
  mutations: {
    RESET_VUEX_STATE(state) {
      Object.assign(state, JSON.parse(localStorage.getItem(initialState)));
    },
    setArticleList(state, articleList) {
      state.articleList = articleList;
    },
    addArticleList(state, article) {
      state.articleList.push(article);
    },
    setCategoryList(state, categoryList) {
      state.categoryList = categoryList;
    },
    addCategoryList(state, category) {
      state.categoryList.push(category);
    },
    setUniqueCategoryList(state, uniqueCategoryList) {
      state.uniqueCategoryList = uniqueCategoryList;
    },
    addUniqueCategoryList(state, uniqueCategory) {
      state.uniqueCategoryList.push(uniqueCategory);
    },
    setLoginUser(state, loginUser) {
      state.loginUser = loginUser;
    },
    setFirebaseUser(state, firebaseUser) {
      state.firebaseUser = firebaseUser;
    },

    setLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus;
    },
    setMyArticleHistory(state, articleList) {
      state.loginUser["articleHistory"] = articleList;
    },
  },
  actions: {
    RESET_VUEX_STATE({ commit }) {
      commit("RESET_VUEX_STATE");
    },
    setArticleList({ commit }, articleList) {
      commit("setArticleList", articleList);
    },
    addArticleList({ commit }, article) {
      commit("addArticleList", article);
    },
    setUniqueCategoryList({ commit }, uniqueCategoryList) {
      commit("setUniqueCategoryList", uniqueCategoryList);
    },
    addUniqueCategoryList({ commit }, uniqueCategory) {
      commit("addUniqueCategoryList", uniqueCategory);
    },
    firebaseLogin({ commit }, userNameAndPassword) {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          userNameAndPassword.userId,
          userNameAndPassword.password
        )
        .then((response) => {
          Promise.resolve()
            .then(() => {
              commit("setFirebaseUser", response);
              commit("setLoginStatus", true);
            })
            .then(() => {
              router.push({ path: "/myPage/top" });
            });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    },
    firebaseLogout(){
      firebase.auth().signOut().then(function() {
        alert("ログアウトしました")
        // Sign-out successful.
      }).catch(function(error) {
        console.log(error)
        // An error happened.
      });

    },
    setLoginUser({ commit }, loginUser) {
      commit("setLoginUser", loginUser);
    },
    setLoginStatus({ commit }, loginStatus) {
      commit("setLoginStatus", loginStatus);
    },
    setMyArticleHistory({ commit }, articleList) {
      commit("setLoginStatus", articleList);
    },
    setCategoryList({ commit }, categoryList) {
      commit("setCategoryList", categoryList);
    },
  },
  modules: {
    loginUser,
  },
  plugins: [createPersistedState()],
});
