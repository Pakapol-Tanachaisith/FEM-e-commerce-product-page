import { ref } from "vue";
import { defineStore } from "pinia";

export const useLightboxStore = defineStore("lightbox", () => {
  const isOpen = ref(false);

  const onOpen = () => (isOpen.value = true);
  const onClose = () => (isOpen.value = false);

  return {
    isOpen,
    onClose,
    onOpen,
  };
});
