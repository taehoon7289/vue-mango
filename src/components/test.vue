<template>
  <span>test 컴포넌트 영역 :: {{ data.value }}</span>
</template>

<script>
import { ref } from "vue";

const useCount = () => {
  const count = ref(0);
  return { count };
};

export default {
  name: "test",
  props: {
    value: {
      type: [Object]
    }
  },
  async setup() {
    const { count } = useCount();
    return {
      count
    };
  }
};
</script>

<style scoped lang="scss"></style>
