import { ref, watch } from "vue";

export function useStorage(key, defaultVal = "empty...") {
  let data = localStorage.getItem(key);
  if (data == null) {
    localStorage.setItem(key, defaultVal);
  }

  let Var = ref(data || defaultVal);
  watch(Var, () => {
    write();
  });

  function write() {
    if (Var.value === "") {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, Var.value);
    }
  }

  return Var;
}
