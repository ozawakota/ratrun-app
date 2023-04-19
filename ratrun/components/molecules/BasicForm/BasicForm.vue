<template>
  <form class="signup_form" @submit.prevent="submitForm">
    <fieldset class="c-fieldset">
      <legend>メールアドレス</legend>
      <div class="form_input">
        <BasicInput
          type="email"
          placeholder="taro.tanaka@example.com"
          v-model="formDataParent.email"
        />
      </div>
    </fieldset>
    <fieldset class="c-fieldset">
      <legend>パスワード</legend>
      <div class="form_input">
        <BasicInput
          type="password"
          placeholder="パスワード(半角英数6文字以上)"
          v-model="formDataParent.password"
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
import { inject, ref } from "vue";
import { BasicInput } from "../../atoms/Input";
import { BasicButton } from "../../atoms/Button";

// import { formData } from "../../../containers/Signup";
const formDataParent = inject("parentformData", ref(null));

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