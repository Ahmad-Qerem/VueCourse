<template>
  <div :class="$style.Logo">
    <slot />
    <span>
      {{ Title }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  Title: String,
});
</script>

<style module>
.Logo {
  padding: 1rem;
  font-size: 2rem;
  color: hsla(160, 100%, 37%, 1);
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  transition: 0.8s;
}
.Logo:hover {
  background-color: hsla(160, 100%, 37%, 0.1);
}
</style>
