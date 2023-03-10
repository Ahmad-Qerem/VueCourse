import { defineStore } from "pinia";

export let useTeamStore = defineStore("team", {
  state() {
    return {
      name: "",
      spots: 0,
      members: [],
    };
  },

  actions: {
    async fill() {
      let r = await import("../team.json");
      this.$state = r.default;
    },

    add(data) {
      this.members.push({
        name: data.name,
        email: data.email,
        status: "Offline",
      });
    },
  },
});
