<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ data.text }}</h1>
    <h1>{{ data.value }}</h1>
    <h1>{{ data.test }}</h1>
    <h1>{{ $dayjs().format("YYYY-MM-DD") }}</h1>
  </div>
  <test :value="data.value"></test>
</template>

<script>
import {
  reactive,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured
} from "vue";
import Test from "@/components/test";

import dayjs from "dayjs";

export default {
  name: "about",
  components: { Test },
  setup(props, { attrs, slots, emit }) {
    console.log("attrs", attrs);
    console.log("slots", slots);
    console.log("emit", emit);
    const data = reactive({
      text: "aaaaaaaaaaaa",
      test: computed(() => data.text.toUpperCase()),
      value: dayjs()
    });
    onBeforeMount(() => {
      // ...
      console.log("onBeforeMount", this);
    });
    onMounted(() => {
      // ...
      console.log("onMounted", this);
    });
    onBeforeUpdate(() => {
      // ...
      console.log("onBeforeUpdate", this);
    });
    onUpdated(() => {
      // ...
      console.log("onUpdated", this);
    });
    onBeforeUnmount(() => {
      // ...
      console.log("onBeforeUnmount", this);
    });
    onUnmounted(() => {
      // ...
      console.log("onUnmounted", this);
    });
    onActivated(() => {
      // ...
      console.log("onActivated", this);
    });
    onDeactivated(() => {
      // ...
      console.log("onDeactivated", this);
    });
    onErrorCaptured(() => {
      // ...
      console.log("onErrorCaptured", this);
    });
    return {
      data
    };
  }
};
</script>
