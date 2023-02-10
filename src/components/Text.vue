<script setup>
import { inject } from "vue";
import BTN from "./BTN.vue";
let { myCounter } = inject("counter");
</script>

<template>
  <label>
    this is child 1 :
    <input type="text" v-model="myCounter" />
  </label>
  <BTN></BTN>
</template>

<style></style>
