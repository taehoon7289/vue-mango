<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ data.text }}</h1>
    <h1>{{ value }}</h1>
    <h1>{{ data.test }}</h1>
  </div>
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

export default {
  name: "about",
  props: {
    value: {
      type: [String],
      default: "dddd"
    }
  },
  setup() {
    const data = reactive({
      text: "aaaaaaaaaaaa",
      test: computed(() => data.text.toUpperCase())
    });
    onBeforeMount(() => {
      // ...
    });
    onMounted(() => {
      // ...
    });
    onBeforeUpdate(() => {
      // ...
    });
    onUpdated(() => {
      // ...
    });
    onBeforeUnmount(() => {
      // ...
    });
    onUnmounted(() => {
      // ...
    });
    onActivated(() => {
      // ...
    });
    onDeactivated(() => {
      // ...
    });
    onErrorCaptured(() => {
      // ...
    });
    return {
      data
    };
  }
};
</script>
