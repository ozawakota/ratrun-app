<template>
  <AppSignup />
</template>

<script lang="ts" setup>
import { provide, reactive } from "vue";
import { AppSignup } from "../../components/organisms/Signup";

type InputDataType = {
  label: string;
  type: "email" | "password" | "number" | "text";
  placeholder: string;
  value: string;
};

const inputData: InputDataType[] = reactive([
  {
    label: "メールアドレス",
    type: "email",
    placeholder: "taro.tanaka@example.com",
    value: "",
  },
  {
    label: "パスワード",
    type: "password",
    placeholder: "パスワード(半角英数6文字以上)",
    value: "",
  },
]);

provide("formDataKey", inputData);

const handleClick = () => {
  const Req = inputData.reduce(
    (acc, { type, value }) => ({ ...acc, [type]: value }),
    {}
  );
  // const Req = {
  //   email: value
  //   password: value
  // } と同じ
};

// ここでAPIを叩いたり、状態を管理する
</script>