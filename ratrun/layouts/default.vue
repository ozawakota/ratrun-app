<template>
  <div class="wrapper">
    <Header></Header>
    <NuxtPage />
    <Footer></Footer>
  </div>
</template>

<script>
import { Header } from "../components/organisms/Header";
import { Footer } from "../components/organisms/Footer";

export default {
  components: { Header, Footer },
};
</script>

<style lang='scss' scoped>
.wrapper {
}
</style>