import AssignmentItem from "./AssignmentItem.js";

export default {
  components: { AssignmentItem },
  template: `
        <section v-if="assignments.length">
            <h2>{{title}}</h2>
            <ul>
                <AssignmentItem v-for="assignment in assignments" :assignment="assignment" :key="assignment.id"></AssignmentItem>
            </ul>
        </section>
    `,
  props: {
    assignments: Array,
    title: String,
  },
};