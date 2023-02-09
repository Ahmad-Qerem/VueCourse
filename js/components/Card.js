export default {
  template: `
  
        <div 
            :class="{
                'ListWrapper':true,
                'lightTheam':theam == 'light',
            }"
        >
            <div v-if="$slots.heading">
                <h2> <slot name="heading" ></slot></h2>
            </div>
         
            <div>
                <slot></slot>
                <footer v-if="$slots.footer">
                    <slot name="footer"/>
                </footer>
            </div>
        </div>
    
    `,
  props: {
    theam: {
      type: String,
      defaultL: "dark",
    },
  },
};