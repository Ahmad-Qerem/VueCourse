<script setup>
import { inject } from "vue";
import Counter from "./Counter.vue";
let { increment } = inject("counter");
</script>
<template>
  <label>
    this is child 2 :
    <button @click="increment">Update</button>
  </label>
  <Counter />
</template>
<style></style>
