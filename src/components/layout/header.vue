<template>
  <header class="app-bar">
    <div class="left">
      <div>
        <button class="button-menu" @click="fnClick">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
    <div class="title">
      <span>날씨앱</span>
    </div>
  </header>
</template>

<script>
import "./header.scss";
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "header",
  setup() {
    const route = useRoute();
    const store = useStore();
    const isShowDrawer = computed(() => {
      return store.getters["app/getIsShowDrawer"];
    });

    // 현재 path 감지
    watch(route, () => {
      console.log("watch route", route.fullPath);
    });

    return {
      isShowDrawer
    };
  },
  methods: {
    fnClick() {
      this.$store.dispatch("app/updateIsShowDrawer", {
        isShowDrawer: !this.isShowDrawer
      });
    }
  }
};
</script>
