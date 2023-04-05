<template>
  <input :type="type" />
</template>

<script lang="ts">
import { PropType } from "vue";
type InputType = "text" | "number" | "email" | "password";
export default {
  props: {
    type: {
      type: String as PropType<InputType>, // stringにせず、よりTypeセーフティにする
      default: "text",
    },
  },
};
</script>
