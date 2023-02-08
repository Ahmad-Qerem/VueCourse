import AssignmentList from "./AssignmentList.js";
import AddAssignment from "./AddAssignment.js";
export default {
  components: { AssignmentList, AddAssignment },
  template: `
        <AssignmentList :assignments="filters.NotCompleted" title="TODO"></AssignmentList>
        <AssignmentList :assignments="filters.Completed" title="DONE"></AssignmentList>
        <AddAssignment @add="HandelSubmit"></AddAssignment>
    `,
  data() {
    return {
      assignments: [
        {
          name: "Finish project",
          complete: false,
          id: 1,
        },
        {
          name: "Read chapter",
          complete: false,
          id: 2,
        },
        {
          name: "Turn in homework",
          complete: false,
          id: 3,
        },
      ],
      newAssignment: "",
    };
  },
  computed: {
    filters() {
      return {
        Completed: this.assignments.filter((a) => a.complete),
        NotCompleted: this.assignments.filter((a) => !a.complete),
      };
    },
  },
  methods: {
    HandelSubmit(assignment) {
      this.assignments.push({
        name: assignment,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
