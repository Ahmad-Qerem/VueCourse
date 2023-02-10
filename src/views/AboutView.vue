<script>
  import flash from "../mixins/flash.js";

  export default {
    mixins:[flash],
  };
</script>

<template>
  <div class="about">
    <h1>About Page</h1>
    <button @click="flash('Hello')">Click Me</button>
  </div>
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
