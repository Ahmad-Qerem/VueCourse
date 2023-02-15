<script setup>

  import {useTeamStore} from "../stores/TeamStore"
  let team = useTeamStore();
</script>
<template>
  <div class="TeamNameWrapper">
    <slot />
    <div class="TeamName">
      {{ team.name }} Team
    </div>
    <div class="DotDiv">
      {{ team.members.length }}
    </div>
  </div>
</template>
<style>
.TeamNameWrapper {
  position: relative;
  display: flex;
}
.TeamName {
  font-size: 2rem;
}
.DotDiv {
  position: absolute;
  top: 0.2rem;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  font-size: 0.5rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border-radius: 50%;
}
</style>
