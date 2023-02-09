import Assignments from "./Assignments.js";
import Card from "./Card.js";
export default {
  components: { Assignments, Card },
  template: `
    <Assignments></Assignments>

    <Card>
      <template v-slot:heading>
        This Is Heading 
      </template>
      This Is Content
    </Card>

    <Card>
      This Is Content
    </Card>

    <Card>
      <template v-slot:heading>
        This Is Heading 
      </template>
      This Is Content
      <template v-slot:footer>
        This Is Footer
      </template>
    </Card>

    <Card theam="light">
      <template v-slot:heading>
        This Is Heading 
      </template>
      This Is Content
      <template v-slot:footer>
        This Is Footer
      </template>
    </Card>
  `,
};