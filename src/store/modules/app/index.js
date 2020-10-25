export const actions = {
  updateIsShowDrawer({ commit }, payload) {
    commit("setIsShowDrawer", payload);
  }
};
export const state = {
  isShowDrawer: false
};
export const getters = {
  getIsShowDrawer: state => {
    return state.isShowDrawer;
  }
};
export const mutations = {
  setIsShowDrawer(state, { isShowDrawer }) {
    state.isShowDrawer = isShowDrawer;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
