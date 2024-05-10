<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@headlessui/vue";

import PreviousIcon from "@/components/icons/PreviousIcon.vue";
import NextIcon from "@/components/icons/NextIcon.vue";
import { useLightboxStore } from "@/stores/lightbox";
import { PRODUCT_IMAGES } from "@/constant";
import CloseIcon from "@/components/icons/CloseIcon.vue";

const props = defineProps(["images"]);

const lightboxStore = useLightboxStore();

const selectedIndex = ref(lightboxStore.initialIndex || 0);

function onTabChange(index) {
  selectedIndex.value = index;
}

function previousTab() {
  console.log("prev");
  let newIndex = selectedIndex.value - 1;

  if (newIndex < 0) {
    newIndex = props.images.length - 1;
  }

  selectedIndex.value = newIndex;
}

function nextTab() {
  let newIndex = selectedIndex.value + 1;

  if (newIndex > props.images.length - 1) {
    newIndex = 0;
  }

  selectedIndex.value = newIndex;
}
</script>

<template>
  <Dialog
    :open="lightboxStore.isOpen"
    @close="lightboxStore.onClose"
    class="relative z-50"
  >
    <div class="fixed inset-0 bg-black/80" aria-hidden="true" />

    <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
      <DialogPanel>
        <div class="text-right">
          <button
            @click="lightboxStore.onClose"
            class="mb-6 group hover:fill-primary-500 fill-grayish-blue-600"
          >
            <CloseIcon />
          </button>
          <TabGroup
            as="div"
            class="max-w-[480px]"
            :selected-index="selectedIndex"
            @change="onTabChange"
          >
            <TabPanels class="relative">
              <button
                @click="previousTab"
                class="absolute bg-white group top-1/2 left-0 grid place-items-center w-10 h-10 rounded-full -translate-x-1/2"
              >
                <PreviousIcon />
              </button>
              <button
                @click="nextTab"
                class="absolute bg-white group top-1/2 right-0 grid place-items-center w-10 h-10 rounded-full translate-x-1/2"
              >
                <NextIcon />
              </button>
              <TabPanel
                class="w-full aspect-square overflow-hidden rounded-lg"
                v-for="(product, i) in PRODUCT_IMAGES"
                :key="`src-${i}`"
              >
                <img
                  :src="product.src"
                  alt="product image"
                  class="object-cover"
                />
              </TabPanel>
            </TabPanels>
            <TabList :class="$style['tab-list']">
              <Tab
                v-for="(product, i) in PRODUCT_IMAGES"
                :key="`thumb-${i}`"
                class="overflow-hidden rounded-md"
                :class="{ 'border-2 border-primary-500': i === selectedIndex }"
              >
                <img
                  :src="product.thumb"
                  alt="product image"
                  class="object-cover"
                  :class="{ 'opacity-50': i === selectedIndex }"
                />
              </Tab>
            </TabList>
          </TabGroup>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<style module>
.tab-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
</style>
