<script setup>
import { useStorage } from "../composables/useStorage";
import TababaleTextArea from "../components/TababaleTextArea.vue";
import { useCounterStore } from "../stores/conterStoreUsingPinia";
let FirstName = useStorage("First Name", "Youer First Name ");
let LastName = useStorage("Last Name", "Youer Last Name");
let Age = useStorage("Age", "youer Age");
let Address = useStorage("Address", "Youer Address");

let counter = useCounterStore();
</script>

<template>
  <form class="MainWraper">
    <h2>Contact Info {{ counter.count }}</h2>
    <div class="inputs">
      <label class="OneInput">
        First Name : <input type="text" v-model="FirstName"
      /></label>
      <label class="OneInput">
        Last Name : <input type="text" v-model="LastName"
      /></label>
      <label class="OneInput"> Age : <input type="text" v-model="Age" /></label>
      <label class="OneInput">
        Address : <input type="text" v-model="Address"
      /></label>
      <TababaleTextArea />
    </div>
    <button class="btn" @click.prevent="counter.dumyFunction" type="submit">
      Send
    </button>
    <button @click.prevent="counter.increment">Add</button>
  </form>
</template>

<style>
.MainWraper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  border: 1px solid black;
}
.inputs {
  display: grid;
  gap: 10px;
}
.OneInput {
  display: flex;
  justify-content: space-between;
}
form {
  display: flex;
  flex-direction: column;
}
.textArea {
  width: 300px;
  height: 100px;
  resize: none;
}
.btn {
  margin: 5px;
  padding: 5px 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  box-shadow: 5px 10px 10px gray;
}
.btn:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
