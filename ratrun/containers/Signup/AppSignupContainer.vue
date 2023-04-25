<template>
  <AppSignup
    @form-submitted="handleFormSubmitted"
    @update-input="handleUpdateInput($event)"
  />
</template>

<script lang="ts" setup>
import { provide, reactive } from "vue";
import { AppSignup } from "../../components/organisms/Signup";

type InputDataType = {
  label: string;
  type: "email" | "password" | "number" | "text";
  placeholder: string;
  value: string | number;
  required: boolean;
  isValid: boolean;
  error: string;
  validate: (value: string | number) => boolean;
  
};

const inputData: InputDataType[] = reactive([
  {
    label: "メールアドレス",
    type: "email",
    placeholder: "taro.tanaka@example.com",
    value: "",
    required: true,
    isValid: true,
    error: "",
    validate(value: string) {
      // バリデーションルールを定義
      const emailRegex = /^[^\s@]{1,255}@[^\s@]+\.[^\s@]+$/;
      const specialCharRegex = /[!#\$%&'\*\+\-\/=\?\^_`\{\|\}~]/;
      const isEmailValid = this.required ? emailRegex.test(value) : true;
      const isSpecialCharValid = !specialCharRegex.test(value);
      return isEmailValid && isSpecialCharValid;
    },
  },
  {
    label: "パスワード",
    type: "text",
    placeholder: "パスワード(半角英数6文字以上)",
    value: "",
    required: true,
    isValid: true,
    error: "",
    validate(value: string) {
      // バリデーションルールを定義
      const passwordRegex = /^([a-zA-Z0-9]{8,16})$/;
      const specialCharRegex = /[!#\$%&'\*\+\-\/=\?\^_`\{\|\}~]/;
      const isPasswordValid = this.required ? passwordRegex.test(value) : true;
      const isSpecialCharValid = !specialCharRegex.test(value);
      return isPasswordValid && isSpecialCharValid;
    },
  },
]);

provide("formDataKey", inputData);

const handleUpdateInput = (event: {
  key: number;
  value: InputDataType["value"];
}) => {
  inputData[event.key].value = event.value;
};

const handleFormSubmitted = () => {
  const Req = inputData.reduce(
    (acc, { type, value }) => ({ ...acc, [type]: value }),
    {}
  );
  console.log(Req);
  // ここでAPIを叩いたり、状態を管理する(emit)
};
</script>