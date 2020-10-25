import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/styles/common.scss";
import axios from "axios";
import VueAxios from "vue-axios";

import { dayjs, Board, Weather } from "./globalProperties"; // 유틸 + api

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$Board = Board;
app.config.globalProperties.$Weather = Weather;

app.use(store);
app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
