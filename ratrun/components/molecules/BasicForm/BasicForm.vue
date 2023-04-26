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
          updateInput($event.target.value, key)
          "
          @blur="$checkValidate(inputData, $event.target.value, key)"
          :required="data.required"
        />
      </div>
      <div v-if="!data.isValid" class="error">{{ data.error }}</div>
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
// plugins
const { $checkValidate } = useNuxtApp();

const updateInput = (value, key) => {
  emit("updateInput", { value:value, key:key });
}



</script>



<style lang='scss' scoped>
.signup {
  &_form {
    margin-block-start: 30px;
    &-btn {
      text-align: center;
    }
  }
  .error{
    color: #e92149;
    margin-block-start: 10px;
    font-size: 15px;
  }
}
</style>