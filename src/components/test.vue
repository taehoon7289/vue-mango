<template>
  sdfasdfsadfasdf1sd231f
  <span>test 컴포넌트 영역 :: {{ data.value }}</span>
</template>

<script>
import { reactive, ref } from "vue";

const useCount = () => {
  const count = ref(0);
  return { count };
};

export default {
  name: "test",
  props: {
    value: {
      type: [String]
    }
  },
  // data: function() {
  //   console.log("propspropspropspropspropsprops", this.value);
  //   console.log("@!#!@#!@");
  //   const { count } = useCount();
  //   const data = reactive({
  //     value: this.value
  //   });
  //   return {
  //     count,
  //     data
  //   };
  // },
  async setup(props) {
    console.log("propspropspropspropspropsprops", props);
    console.log("@!#!@#!@", props.value);
    const { count } = useCount();
    const data = reactive({
      value: props.value
    });
    console.log("#@!#!@#!@#!@#@!#!@", data);
    return {
      count,
      data
    };
  }
};
</script>

<style scoped lang="scss"></style>
