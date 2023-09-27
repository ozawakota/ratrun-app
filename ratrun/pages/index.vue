<template>
  <div class="top-page">
    <BasicLoading v-show="isLoading" />
    <p>トップページ</p>
    <ul>
      <li>
        <a href="">test</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { BasicLoading } from "@/components/atoms/Loading/";
import { ref } from "vue";

const isLoading = ref(false);

(async () => {

  try {
    isLoading.value = true;
    // alert(`${isLoading.value} 通信中`);
  } catch {
    alert("error");
  } finally {
    setTimeout(() => {
      isLoading.value = false
      // alert(`${isLoading.value} 通信完了`);
    }, 2000);

  }
})();

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