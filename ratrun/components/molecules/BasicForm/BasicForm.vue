<template>
  <form class="signup_form" action="/users/signup">
    <fieldset class="c-fieldset">
      <legend>メールアドレス</legend>
      <div class="form_input">
        <input type="email" placeholder="taro.tanaka@example.com">
      </div>
    </fieldset>
    <fieldset class="c-fieldset">
      <legend>パスワード</legend>
      <div class="form_input">
        <input type="password" placeholder="パスワード(半角英数6文字以上)">
      </div>
    </fieldset>
    <div class="form-btn signup_form-btn">
      <button name="button" type="submit" class="c-btn -red">
        <span>同意して新規登録する(無料)</span>
      </button>
    </div>
  </form>
</template>

<script setup>
</script>

<script>
export default {
  name: "BasicForm",
  setup() {},
};
</script>

<style lang='scss' scoped>
.signup{
  &_form{
    margin-block-start:30px;
    &-btn{
      text-align:center;
    }
  }
}
</style>