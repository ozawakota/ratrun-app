<template>
  <AppSignup
    @form-submitted="handleFormSubmitted"
    @update-input="handleUpdateInput($event)"
  />
</template>

<script lang="ts" setup>
import { provide, reactive } from "vue";
import { AppSignup } from "../../components/organisms/Signup";
const { $email, $password } = useNuxtApp();

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
    validate(value) {
      // バリデーションルールを定義(plugins)
      return $email(value,this.required);
    },
  },
  {
    label: "パスワード",
    type: "password",
    placeholder: "パスワード(半角英数6文字以上)",
    value: "",
    required: true,
    isValid: true,
    error: "",
    validate(value) {
      // バリデーションルールを定義(plugins)
      return $password(value,this.required);
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