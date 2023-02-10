<script setup>
import { useCounterStore } from "../stores/conterStoreUsingPinia";
import { state } from "../stores/counterStore";

let counter = useCounterStore();
</script>

<template>
  <h1>Use Store</h1>
  <h2>Home Counter is {{ state.counter }}</h2>
  <h2>Contact Counter Using Pinia is : {{ counter.count }}</h2>
  <button @click="state.increment">Update</button>
</template>

<style>
.about {
  border: 1px solid;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
