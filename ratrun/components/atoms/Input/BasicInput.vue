<template>
  <input :type="type" :placeholder="placeholder" :value="value" />
</template>
  
<script setup lang="ts">
import { PropType, defineProps } from "vue";

type InputType = "text" | "number" | "email" | "password";

const props = defineProps({
  type: {
    type: String as PropType<InputType>,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "test",
  },
});
</script>