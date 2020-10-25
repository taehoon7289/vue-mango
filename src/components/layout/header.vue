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
      <span>망고의 날씨앱</span>
    </div>
  </header>
</template>

<script>
import "./header.scss";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "header",
  setup() {
    const store = useStore();
    const isShowDrawer = computed(() => {
      return store.getters["app/getIsShowDrawer"];
    });
    return {
      isShowDrawer
    };
  },
  methods: {
    fnClick() {
      this.$store.commit("app/setIsShowDrawer", {
        isShowDrawer: !this.isShowDrawer
      });
    }
  }
};
</script>

<style scoped></style>
