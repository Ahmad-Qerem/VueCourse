export default {
  template: `
    <button 
    :class="{
      'btn':true,
      'primary':type == 'primary',
      'secondary':type =='secondary',
      'muted':type == 'muted',
      'isProcessing':processing
    }"  
    :disabled="processing"> <slot/> </button>
    `,
  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
}; 