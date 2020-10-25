import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/styles/common.scss";

import { dayjs } from "./globalProperties";

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;

app.use(store);
app.use(router);
app.mount("#app");
