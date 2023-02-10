<script setup>
import { ref } from "vue";
import { inject } from "vue";
let { myCounter } = inject("counter");
</script>

<template>this is child 3 :{{ myCounter }}</template>
<style></style>
