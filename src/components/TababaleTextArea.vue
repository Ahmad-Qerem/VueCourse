

<script setup>
import { ref } from "@vue/reactivity";


    let textarea = ref(null);

    let onKeyDown=(e)=>{
        let text = textarea.value ;
        let val = text.value,  
        start = text.selectionStart,
        end = text.selectionEnd;
        text.value= val.substring(0,start)+"\t"+val.substring(end)
        

    }
</script>


<template>
    <textarea ref="textarea" @keydown.tab.prevent="onKeyDown" class="textArea" />
</template>



<style>

</style>