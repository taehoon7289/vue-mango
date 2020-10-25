<template>
  <main class="main">
    <div class="container">
      <p>오늘날씨 :: {{ callCnt }}</p>
      <button @click="fnCall">클릭!!</button>
      <button @click="fnClear">클리어</button>
      <p class="result">{{ result }}</p>
    </div>
  </main>
</template>

<script>
import "./index.scss";
import { reactive } from "vue";
export default {
  name: "main-index",
  setup() {
    const data = reactive({
      callCnt: 0,
      result: ""
    });
    return data;
  },
  methods: {
    fnCall: async function() {
      const res = await this.$Weather.getInfo();
      if (res.code === 1) {
        this.result = JSON.stringify(res.result);
        this.callCnt++
      }
    },
    fnClear: function() {
      this.result = ""
    }
  }
};
</script>
