<template>
  <AppSignup />
</template>

<script lang="ts" setup>
import { ref, provide } from "vue";
import { AppSignup } from "../../components/organisms/Signup";
import { UserReqType } from "../../types/user/LoginType";

// フォームデータ
const formData = ref<UserReqType>({
  email: "",
  password: "",
});
provide("parentformData", formData);

// バリデーションチェック

type InputDataType = {
  type: "email" | "password" | "number" | "text";
  placeholder: string;
};

const inputData: InputDataType[] = [
  {
    type: "email",
    placeholder: "taro.tanaka@example.com",
  },
  {
    type: "password",
    placeholder: "パスワード(半角英数6文字以上)",
  },
];

// ここでAPIを叩いたり、状態を管理する
</script>