<script setup>
import { reactive } from "@vue/reactivity";

defineProps({
  Show: Boolean,
});
const emit = defineEmits(["ShowData"]);

let data = reactive({
  name: "",
  email: "",
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <!-- inside Transition
    enter-active-class="transition duration-300"
    enter-from-class=" opacity-0 scale-125"
    enter-to-class=" opacity-100 scale-100"
    leave-active-class="transition duration-200"
    leave-to-class="opacity-0 scale-125"
  
  -->
      <div class="ModalWrapper" v-if="Show">
        <div class="Modal">
          <h2>Add New Team Member</h2>
          <form>
            <input
              v-model="data.name"
              required
              type="text"
              placeholder="Name"
            />
            <input
              v-model="data.email"
              required
              type="text"
              placeholder="Email"
            />
            <button @click.prevent="emit('ShowData', data)" type="submit">
              Add
            </button>
          </form>
          <footer class="mt-2">
            <button @click="$emit('close')">Close</button>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.ModalWrapper {
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
}
.Modal {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
  width: 90vb;
  height: 30vb;
  border-radius: 20px;
}
.Modal form {
  display: flex;
  padding: 1rem;
}
.Modal button {
  margin: 0 1rem;
  padding: 0 1rem;
  border: 1px solid;
  border-radius: 5px;
}
.Modal button:hover {
  background-color: #f3f3f3;
}
.Modal input {
  border-bottom: 1px solid;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin: 0 1rem;
}
.Modal input:focus {
  outline: none;
  background-color: #f3f3f3;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid silver;
}
.modal-enter-active,
.modal-leave-active {
  transition-duration: 300ms;
  scale: 1.25;
  opacity: 0;
}
.modal-enter-from {
}
.modal-enter-to {
  opacity: 1;
  scale: 1;
}
</style>
