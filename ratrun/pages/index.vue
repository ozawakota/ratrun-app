<template>
  <div class="top-page">
    <p>トップページ</p>
    <ul>
      <li>
        <a href="">test</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<script >
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.top {
  &-page {
    color: red;
    @include mobile {
      color: blue;
    }
    @include tablet {
      color: green;
    }
  }
}
</style>