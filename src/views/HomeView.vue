<script setup>
import {useFlash} from "../composables/useFlash";

let {flash} = useFlash();

</script>

<template>
  <main>
    <!-- to active passing function from vite.config -- add opject in vue({...}) reactivityTransform set to true-->
    <h1> Home Page </h1>
    <button @click="flash('Test There')">Click Me</button>
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
