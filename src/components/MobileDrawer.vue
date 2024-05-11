<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";

import { useMobileDrawer } from "@/stores/mobileDrawer";
import CloseIcon from "@/components/icons/CloseIcon.vue";

const mobileDrawer = useMobileDrawer();
</script>

<template>
  <Dialog :open="mobileDrawer.isOpen" @close="mobileDrawer.onClose">
    <div aria-hidden="true" class="fixed inset-0 bg-black/80"></div>
    <DialogPanel class="fixed top-0 bottom-0 w-3/4 bg-white p-8">
      <button @click="mobileDrawer.onClose">
        <CloseIcon class="w- h-4 fill-grayish-blue-600" />
      </button>
      <nav class="mt-16">
        <ul class="space-y-6">
          <li>
            <a class="text-2xl font-bold text-grayish-blue-700" href="/"
              >Collections</a
            >
          </li>
          <li>
            <a class="text-2xl font-bold text-grayish-blue-700" href="/">Men</a>
          </li>
          <li>
            <a class="text-2xl font-bold text-grayish-blue-700" href="/"
              >Women</a
            >
          </li>
          <li>
            <a class="text-2xl font-bold text-grayish-blue-700" href="/"
              >About</a
            >
          </li>
          <li>
            <a class="text-2xl font-bold text-grayish-blue-700" href="/"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </DialogPanel>
  </Dialog>
</template>
