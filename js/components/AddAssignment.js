

export default {
  template: `
        <form @submit.prevent="HandelSubmit">
          <input v-model="newAssignment" placeHolder="New Assignment ...">
          <button class="btn" type="submit"> Add </button>
        </form>
    `,
  data() {
    return {
      newAssignment: "",
    };
  },
  methods: {
      HandelSubmit() { 
          this.$emit("add", this.newAssignment);
          this.newAssignment = "";
      },
  },
};