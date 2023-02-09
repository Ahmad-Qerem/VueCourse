import AssignmentList from "./AssignmentList.js";
import AddAssignment from "./AddAssignment.js";
export default {
  components: { AssignmentList, AddAssignment },
  template: `

        <div class="Lists">
          <AssignmentList  :assignments="filters.NotCompleted" title="TODO">
            <AddAssignment @add="HandelSubmit" ></AddAssignment>
          </AssignmentList>          
          <AssignmentList :assignments="filters.Completed" title="DONE" canClose></AssignmentList>
        </div>
    `,
  data() {
    return {
      assignments: [],
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
  created() {
    //fake API localy from json-server library
    fetch("http://localhost:3000/assignments")
      .then((Response) => Response.json())
      .then((data) => (this.assignments = data));
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
