<!-- 使いまわせるようにAppFormとして置いておく -->
<template>
  <div>
    <BasicInput type="text" />
    <BasicInput type="password" />
    <BasicButton @onClick="handleOnClick" />
  </div>
</template>
  
  <script lang="ts">
import { BasicInput } from "../../atoms/Input";
import { BasicButton } from "../../atoms/Button";
export default {
  components: { BasicInput, BasicButton },
  setup() {
    const handleOnClick = (): void => {
      console.log("click");
    };
    return { handleOnClick };
  },
};
</script>