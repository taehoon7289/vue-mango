<template>
  <div class="app">
    <Header />
    <NavDrawer />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/header";
import NavDrawer from "@/components/layout/nav-drawer";
import Footer from "@/components/layout/footer";

import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    NavDrawer,
    Footer
  },
  setup() {
    const count = ref(0);
    const store = useStore();
    const isShowDrawer = computed(() => {
      return store.getters["app/getIsShowDrawer"];
    });
    // watch
    watch(count, () => {
      console.log("변경됨!!", count.value);
    });
    watch(isShowDrawer, () => {
      console.log("변경됨!!", isShowDrawer);
    });
    return { isShowDrawer, count };
  }
};
</script>

<style lang="scss"></style>
