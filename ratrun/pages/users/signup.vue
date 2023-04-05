<script setup lang="ts">
import { BasicForm } from "../../components/molecules/BasicForm";
</script>

<template>
  <section class="page signup">
    <div class="c-inner">
      <div class="signup_inner">
        <h2 class="p-title">新規会員登録</h2>
        <BasicForm />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.signup {
  &_inner {
    margin-block-start: 30px;
    max-width: 740px;
    margin-inline: auto;
  }
}
</style>