<script setup>
defineProps({
  Image: String,
  Name: String,
});
</script>

<template>
  <div class="IconWrapper">
    <slot />
    <span>{{ Name }}</span>
  </div>
</template>

<style>
.IconWrapper {
  margin: 5px 0px;
  padding: 5px 40px;
  display: flex;
  align-items: center;
}
</style>
