<template>
  <button @click="onClick">{{ text }}</button>
</template>
  
  <script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: "クリック",
    },
  },
  emits: ["clickButton"],
  setup(_, { emit }) {
    const onClick = (): void => {
      emit("clickButton");
      // 一個上の階層に持って行く時はemitを使う
      // 2個以上の階層に持って行く時はinject/provideを使ってみましょう
    };
    return { onClick };
  },
};
</script>
  