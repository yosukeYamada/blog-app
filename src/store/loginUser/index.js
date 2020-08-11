import loginUserProperty from "./LoginUser.js";

let initializeLoginUser = loginUserProperty;

export const loginUser = {
  namespaced: true,
  state: initializeLoginUser,
  mutations: {
    setLoginUser(state, loginUser) {
    console.log(state)
      state.loginUser = loginUser;
    },
    logout(state) {
      console.log(loginUserProperty());
      Object.assign(state.loginUser,loginUserProperty())
      console.log(state);
    },
  },
  getters: {},
  actions: {
    setLoginUser({ commit }, loginUser) {
      commit("setLoginUser", loginUser);
    },
    logout({ commit }) {
      console.log("aaaa");
      commit("logout");
    },
  },
};

export default loginUser;
