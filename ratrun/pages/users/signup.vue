<template>
  <section class="page signup">
    <div class="c-inner">
      <div class="signup_inner">
        <h2 class="p-title">新規会員登録</h2>
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
      </div>
      
    </div>
    

  </section>
</template>

<script setup>
</script>

<script >
import { Header } from "../../components/organisms/Header";
import { Footer } from "../../components/organisms/Footer";
export default {
  components: { Header, Footer },
  setup() {},

};
</script>

<style lang="scss" scoped>

.signup{
  &_inner{
    margin-block-start:30px;
    max-width:740px;
    margin-inline: auto;
  }
  &_form{
    margin-block-start:30px;
    &-btn{
      text-align:center;
    }
  }
}

</style>