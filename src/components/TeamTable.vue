<script setup>
  import TeamMember from "../components/TeamMember.vue"
  import {useTeamStore} from "../stores/TeamStore.js"
  
  let team = useTeamStore();
  team.fill();
</script>
<template>
  <div class="TableWrapper">
  <table class="table-fixed border-spacing-2 border-separate">
    <thead>
      <th class="HeaderText">Name</th>
      <th class="HeaderText">Email</th>
      <th class="HeaderText">Status</th>
    </thead>

    <tbody>
      <TeamMember
        v-for="member in team.members"
        :name="member.name"
        :email="member.email"
        :status="member.status"
      />
    </tbody>
  </table>

  <p
    class="text-right text-gray-600 italic"
    v-show="team.members.length === team.spots"
  >
    There are no remaining team spots. Upgrade to add more.
  </p>

  </div>
  
</template>
<style>
.TableWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.HeaderText {
  text-align: left;
  font-size: 2rem;
}
</style>
