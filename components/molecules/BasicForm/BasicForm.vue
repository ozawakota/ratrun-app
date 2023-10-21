<template>
  <form class="signup_form">
    <fieldset class="c-fieldset" v-for="(data, key) in inputData" :key="key">
      <legend>{{ data.label }}</legend>
      <div class="form_input">
        <BasicInput
          :type="data.type"
          :placeholder="data.placeholder"
          :value="data.value"
          @updateInput="
            $emit('updateInput', { value: $event.target.value, key: key })
          "
        />
      </div>
    </fieldset>

    <div class="form-btn signup_form-btn">
      <BasicButton
        text="同意して新規登録する(無料)"
        color="#fff"
        backGround="#F86986"
        @clickButton="$emit('formSubmitted')"
      />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { inject, defineEmits } from "vue";
import { BasicInput } from "../../atoms/Input";
import { BasicButton } from "../../atoms/Button";

const inputData = inject("formDataKey", null);
const emit = defineEmits(["updateInput", "formSubmitted"]);
</script>



<style lang='scss' scoped>
.signup {
  &_form {
    margin-block-start: 30px;
    &-btn {
      text-align: center;
    }
  }
}
</style>