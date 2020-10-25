<template>
  <div class="dim" :class="{ on: isShowDrawer }"></div>
  <nav class="nav-drawer" :class="{ on: isShowDrawer }">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </nav>
</template>

<script>
import "./nav-drawer.scss";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "nav-drawer",
  setup() {
    const store = useStore();
    const isShowDrawer = computed(() => {
      return store.getters["app/getIsShowDrawer"];
    });
    return {
      isShowDrawer
    };
  }
};
</script>

<style scoped></style>
