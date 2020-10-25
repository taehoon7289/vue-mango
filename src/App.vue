<template>
  <div class="app">
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

    <nav class="nav-drawer" :class="{ on: isShowDrawer }">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </nav>
    <div class="dim" :class="{ on: isShowDrawer }"></div>

    <main class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>

    <footer class="footer">
      footer
      <i class="fas fa-bars"></i>
      <i class="fas fa-bars"></i>
      <i class="fas fa-bars"></i>
    </footer>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "app",
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
  },
  methods: {
    fnCount() {
      console.log("count", this.count);
      this.count++;
    },
    fnClick() {
      this.$store.commit("app/setIsShowDrawer", {
        isShowDrawer: !this.isShowDrawer
      });
    }
  }
};
</script>

<style lang="scss">
.app {
  .dim {
    position: absolute;
    top: 5rem;
    z-index: 12;
    width: 100%;
    height: 100%;
    background-color: #a7a7a7;
    opacity: 0.33;
    display: none;
    &.on {
      display: block;
    }
  }
  .app-bar {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 5rem;
    color: white;
    background-color: black;
    display: flex;
    .left {
      width: calc(100% - 32rem);
      display: flex;
      align-items: center;
      justify-content: center;
      .button-menu {
        font-size: 2rem;
        color: white;
      }
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }
  }
  .nav-drawer {
    top: 5rem;
    position: absolute;
    width: 100%;
    font-size: 2rem;
    z-index: 15;
    background-color: aqua;
    display: none;
    &.on {
      display: block;
    }
  }
  .main {
    padding-top: 5rem;
    .container {
    }
  }
  .footer {
  }
}
</style>
