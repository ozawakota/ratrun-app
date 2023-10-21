<template>
  <section class="page login">
    <div class="c-inner">
      <div class="login_inner">
        <h2 class="p-title">ログイン画面</h2>
        <BasicForm />
      </div>
    </div>
  </section>
</template>
  
<script lang="ts" setup>
import { BasicForm } from "../../molecules/BasicForm";
</script>

<style lang="scss" scoped>
.login {
  &_inner {
    margin-block-start: 30px;
    max-width: 740px;
    margin-inline: auto;
  }
}
</style>