<template>
  <button @click="onClick">{{ text }}</button>
</template>
  
<script lang="ts" setup>
import { defineEmits } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "クリック",
  },
});

const onClick = (): void => {
  emit("clickButton");
  // 一個上の階層に持って行く時はemitを使う
  // 2個以上の階層に持って行く時はinject/provideを使ってみましょう
};

const emit = defineEmits(["clickButton"]);
</script>
  