<script setup>
import ProfileImg from "@/assets/images/image-avatar.png";

import { useMobileDrawer } from "@/stores/mobileDrawer";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import Avatar from "@/components/Avatar.vue";
import MainNav from "@/components/MainNav.vue";
import CartPopover from "@/components/CartPopover.vue";

const { onOpen } = useMobileDrawer();
</script>

<template>
  <header
    class="flex items-center sm:border-neutral-200 border-b sm:border-b-1 p-6 sm:p-0"
  >
    <div class="flex items-baseline gap-6 sm:gap-12">
      <button class="sm:hidden" @click="onOpen">
        <MenuIcon />
      </button>
      <p class="text-2xl sm:text-3xl font-bold text-grayish-blue-700">
        sneakers
      </p>
      <MainNav />
    </div>
    <div class="flex items-center ml-auto gap-8 sm:gap-12">
      <CartPopover />
      <Avatar :src="ProfileImg" alt="user profile" />
    </div>
  </header>
</template>
