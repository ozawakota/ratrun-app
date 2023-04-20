<template>
  <form class="signup_form">
    <fieldset class="c-fieldset" v-for="(data, key) in inputData" :key="key">
      <legend>{{ data.label }}</legend>
      <div class="form_input">
        <BasicInput
          :type="data.type"
          :placeholder="data.placeholder"
          v-model="data.value"
        />
      </div>
    </fieldset>

    <div class="form-btn signup_form-btn">
      <BasicButton
        text="同意して新規登録する(無料)"
        color="#fff"
        backGround="#F86986"
        @clickButton="submitForm(inputData)"
      />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { inject, defineEmits, reactive } from "vue";
import { BasicInput } from "../../atoms/Input";
import { BasicButton } from "../../atoms/Button";

const inputData = inject("formDataKey", reactive(null));
const emit = defineEmits(["form-submitted"]);

// // フォームデータの処理
const submitForm = (inputData) => {
  console.log("BasicForm", inputData);

  // フォームデータを親コンポーネントに送信します(AppSignup.vue)
  emit("form-submitted", inputData);
};
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