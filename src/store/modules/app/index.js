export const actions = {}
export const state = {
  isShowDrawer: false
}
export const getters = {
  getIsShowDrawer: state => {
    return state.isShowDrawer;
  },
  getTest: state => {
    return state.test;
  }
}
export const mutations = {
  setIsShowDrawer(state, { isShowDrawer }) {
    console.log("setIsShowDrawer", isShowDrawer);
    state.isShowDrawer = isShowDrawer;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
