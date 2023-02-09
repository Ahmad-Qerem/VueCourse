import AssignmentItem from "./AssignmentItem.js";
import AssignmentTag from "./AssignmentTag.js";
import Card from "./Card.js";

export default {
  components: { AssignmentItem, AssignmentTag, Card },
  template: `
        <Card class="ListWrapper" v-if="ToggleFlag && assignments.length">
            <h2>{{title}} ( {{assignments.length}} ) <button v-if="canClose" @click="toggle" class="close"> &times; </button></h2>
            <AssignmentTag 
              v-model:currentTag="currentTag" 
              :initialTags="assignments.map(a => a.tag)"
            />
            
            <ul>
                <AssignmentItem 
                  v-for="assignment in filterdAssignments" 
                  :assignment="assignment" 
                  :key="assignment.id"
                ></AssignmentItem>
            </ul>
            <slot></slot>
            <template #footer>
              Hello this is footer
            <template>
        </Card>
    `,
  props: {
    assignments: Array,
    title: String,

    canClose: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentTag: "all",
      ToggleFlag: {
        tye: Boolean,
        default: true,
      },
    };
  },
  methods: {
    toggle() {
      this.ToggleFlag = !this.ToggleFlag;
    },
  },
  computed: {
    filterdAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }
      return this.assignments.filter((a) => a.tag == this.currentTag);
    },
  },
};