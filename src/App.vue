<script setup>
import { RouterLink, RouterView } from "vue-router";
import IconHome from "./components/icons/IconHome.vue";
import Logo from "./components/Logo.vue";
import PageIcon from "./components/PageIcon.vue";

</script>

<template>
  <div class="wrapper">
    <nav>
      <Logo Title="Demo" />

      <RouterLink to="/">
        <PageIcon Name="Home">
          <IconHome />
        </PageIcon>
      </RouterLink>

      <RouterLink to="/about">
        <PageIcon Name="About">
          <IconHome />
        </PageIcon>
      </RouterLink>

      <RouterLink to="/contact">
        <PageIcon Name="Contact">
          <IconHome />
        </PageIcon>
      </RouterLink>
    </nav>
    <RouterView />
  </div>
  
</template>

<style scoped>
.wrapper {
  position: relative;
  height: 100%;
  display: flex;
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: s;
  height: 100%;
  padding: 50px;
  border: 1px solid rgba(161, 149, 149, 0.221);
  background-color: rgba(161, 149, 149, 0.221);
}
</style>
