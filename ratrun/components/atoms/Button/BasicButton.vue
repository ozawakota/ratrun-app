<template>
  <button
    type="button"
    @click="$emit('clickButton', $event)"
    :class="['c-btn']"
  >
    <span>{{ text }}</span>
  </button>
</template>
  
<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "クリック",
  },
  color: {
    type: String,
    default: "",
  },
  backGround: {
    type: String,
    default: "",
  },
});
</script>
  

<style lang="scss" scoped>
.c-btn {
  background-color: v-bind(backGround);
  border-color: v-bind(backGround);
  color: v-bind(color);
}
</style>