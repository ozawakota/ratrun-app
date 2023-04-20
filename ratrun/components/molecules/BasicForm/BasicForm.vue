<template>
  <form class="signup_form" @submit.prevent="submitForm">
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
      />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { inject, reactive } from "vue";
import { BasicInput } from "../../atoms/Input";
import { BasicButton } from "../../atoms/Button";

const inputData = inject("formDataKey", reactive(null));

// フォームデータの処理
const submitForm = () => {
  // ここでフォームデータを処理します。例えば、APIに送信します。
  console.log("Form data:");
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