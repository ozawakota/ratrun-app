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