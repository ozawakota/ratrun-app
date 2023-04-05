<template>
  <div>
    <BasicInput type="text" />
    <BasicInput type="password" />
    <BasicButton @click="handleOnClick" />
  </div>
</template>
  
<script setup lang="ts">
import { BasicInput } from "../../atoms/Input";
import { BasicButton } from "../../atoms/Button";

const handleOnClick = (): void => {
  console.log("click");
};
</script>