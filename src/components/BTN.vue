<script setup>
import {useTeamStore} from "../stores/TeamStore"
let team = useTeamStore();

</script>
<template>
  <div>
      <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
              :disabled="team.members.length === team.spots">Add Member ({{ team.spots - team.members.length }} Spots Left)</button>
    </div>
</template>

