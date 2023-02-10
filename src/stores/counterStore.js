import { reactive } from "vue";

export let state = reactive({
  counter: 0,
  increment() {
    this.counter++;
  },
});
