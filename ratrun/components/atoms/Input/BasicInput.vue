<template>
  <input :type="type" :placeholder="placeholder" />
</template>
  
<script setup lang="ts">
import { PropType } from "vue";

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
});
</script>