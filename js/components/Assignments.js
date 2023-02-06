import AssignmentList from './AssignmentList.js';
    
export default {
  components: {AssignmentList},
  template: `
        <AssignmentList :assignments="IsNotCompleted" title="TODO"></AssignmentList>
        <AssignmentList :assignments="IsCompleted" title="DONE"></AssignmentList>
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
    };
  },
  computed: {
    IsCompleted() {
      return this.assignments.filter((a) => a.complete);
    },
    IsNotCompleted() {
      return this.assignments.filter((a) => !a.complete);
    },
  },
};