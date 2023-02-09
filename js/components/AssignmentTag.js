export default {
  template: `
        <div class="tags">
              <button 
                class="tag"
                :class="{
                  'active':tag===currentTag
                }" 
                v-for="tag in tags" 
                @click="$emit('update:currentTag',tag)" >
                  {{tag}}
                </button>
            </div>
    `,

  props: {
    initialTags: Array,
    //currentTag:String, // V1
    //modleValue:String, //default
    currentTag: String, // V2 renamed
  },
  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
