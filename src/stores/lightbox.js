import { ref } from "vue";
import { defineStore } from "pinia";

export const useLightboxStore = defineStore("lightbox", () => {
  const isOpen = ref(false);
  const initialIndex = ref(0);

  const onOpen = (index = 0) => {
    initialIndex.value = index;
    isOpen.value = true;
  };

  const onClose = () => {
    initialIndex.value = 0;
    isOpen.value = false;
  };

  return {
    isOpen,
    initialIndex,
    onOpen,
    onClose,
  };
});
