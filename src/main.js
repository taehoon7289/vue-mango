import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { dayjs } from "./globalProperties";

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;

app
  .use(store)
  .use(router)
  .mount("#app");
