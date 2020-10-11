<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ data.text }}</h1>
    <h1>{{ value }}</h1>
    <h1>{{ data.test }}</h1>
    <h1>{{ $dayjs().format("YYYY-MM-DD") }}</h1>
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
  data: function() {
    console.log("this11", this);
    console.log("this22", this.$dayjs());
    console.log("this22", this.$router);
    return {
      one: 1
    };
  },
  setup(props, { attrs, slots, emit }) {
    console.log("attrs", attrs);
    console.log("slots", slots);
    console.log("emit", emit);
    console.log("props.value", props.value);
    const data = reactive({
      text: "aaaaaaaaaaaa",
      test: computed(() => data.text.toUpperCase())
    });
    onBeforeMount(() => {
      // ...
      console.log('onBeforeMount', this)
    });
    onMounted(() => {
      // ...
      console.log('onMounted', this)
    });
    onBeforeUpdate(() => {
      // ...
      console.log('onBeforeUpdate', this)
    });
    onUpdated(() => {
      // ...
      console.log('onUpdated', this)
    });
    onBeforeUnmount(() => {
      // ...
      console.log('onBeforeUnmount', this)
    });
    onUnmounted(() => {
      // ...
      console.log('onUnmounted', this)
    });
    onActivated(() => {
      // ...
      console.log('onActivated', this)
    });
    onDeactivated(() => {
      // ...
      console.log('onDeactivated', this)
    });
    onErrorCaptured(() => {
      // ...
      console.log('onErrorCaptured', this)
    });
    return {
      data
    };
  }
};
</script>
