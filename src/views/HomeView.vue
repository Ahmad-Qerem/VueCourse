<script setup>
import { useFlash } from "../composables/useFlash";
import Text from "../components/Text.vue";
import { provide, ref } from "vue";
let { flash } = useFlash();
let myCounter = ref(0);
provide("counter", {
  myCounter,
  increment: () => {
    myCounter.value++;
  },
});
</script>

<template>
  <main>
    <!-- to active passing function from vite.config -- add opject in vue({...}) reactivityTransform set to true-->
    <h1>Use Provider</h1>
    <Text> </Text>
    <button @click="flash(myCounter)">Update</button>
  </main>
</template>

<style scoped>
main {
  border: 1px solid black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
