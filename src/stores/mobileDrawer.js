import { defineStore } from "pinia";
import { ref } from "vue";

export const useMobileDrawer = defineStore("mobileDrawer", () => {
  const isOpen = ref(false);

  const onOpen = () => (isOpen.value = true);
  const onClose = () => (isOpen.value = false);

  return {
    isOpen,
    onClose,
    onOpen,
  };
});
