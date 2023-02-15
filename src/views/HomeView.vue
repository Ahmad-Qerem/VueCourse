<script setup>
import TopWrapper from "../components/TopWrapper.vue";
import BodyWrapper from "../components/BodyWrapper.vue";
import Modal from "../components/Modal.vue"
import { ref } from "@vue/reactivity";
import {useTeamStore} from "../stores/TeamStore";

let {add} = useTeamStore();
let flag = ref(false);
const  display  = (data)=>{
  flag.value= false
  add(data);
}
</script>

<template>
  <main>
    <TopWrapper @open="flag=true"/>
    <BodyWrapper />
    <Modal @ShowData="display" @close="flag=false" :Show="flag" />
  </main>
</template>

<style>
main {
  padding: 1rem;
  width: 100%;
}
</style>
