import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const count = ref(0);

  const reset = () => {
    count.value = 0;
  };

  const addItems = (quantity) => {
    count.value += quantity;
  };

  return { count, addItems, reset };
});
