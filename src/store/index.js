import { createStore } from "vuex";
import app from "./modules/app/index"
export default createStore({
  strict: false,
  state: {
    temp: "3123123"
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    app: app
  }
});
