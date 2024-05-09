<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

import PreviousIcon from "@/components/icons/PreviousIcon.vue";
import NextIcon from "@/components/icons/NextIcon.vue";

const props = defineProps(["images"]);

const selectedIndex = ref(0);

function onTabChange(index) {
  selectedIndex.value = index;
}

function previousTab() {
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
  <TabGroup :selected-index="selectedIndex" @change="onTabChange">
    <div class="flex flex-col gap-8">
      <TabPanels class="relative">
        <button
          @click.stop="previousTab"
          aria-label="previous image"
          class="sm:hidden bg-white absolute top-1/2 left-4 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <PreviousIcon />
        </button>
        <button
          @click.stop="nextTab"
          aria-label="next image"
          class="sm:hidden bg-white absolute top-1/2 right-4 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <NextIcon />
        </button>

        <TabPanel
          v-for="(product, index) in images"
          :key="`product-src-${index}`"
        >
          <img
            :src="product.src"
            alt="product image"
            class="w-full aspect-square sm:rounded-2xl"
          />
        </TabPanel>
      </TabPanels>
      <TabList class="sm:flex hidden gap-8">
        <Tab
          v-for="(product, index) in images"
          :key="`thumb-${index}`"
          class="border-[3px] group focus:ring-primary-500 aspect-square rounded-xl overflow-hidden hover:border-primary-500"
          :class="{
            'border-[3px] border-primary-500': index === selectedIndex,
          }"
        >
          <img
            class="w-full object-cover group-hover:opacity-50"
            :class="{ 'opacity-50': index === selectedIndex }"
            :src="product.thumb"
            alt="product thumbnail"
          />
        </Tab>
      </TabList>
    </div>
  </TabGroup>
</template>
