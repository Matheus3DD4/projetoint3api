<script>
import CabecalhoHeader from "@/components/CabecalhoHeader.vue";

export default {
  components: { CabecalhoHeader },
};
</script>
<template>
  <CabecalhoHeader />
  <main>
    <RouterView />
  </main>
</template>
<style></style>
