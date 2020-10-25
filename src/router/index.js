import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/main"),
    meta: () => {
      return {
        title: "망고날씨"
      };
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about"),
    meta: () => {
      return {
        title: "망고날씨"
      };
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
