<script setup>
import ProfileImg from "@/assets/images/image-avatar.png";

import CartIcon from "@/components/icons/CartIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import Avatar from "@/components/Avatar.vue";
import MainNav from "./MainNav.vue";
</script>

<template>
  <header
    class="flex items-center sm:border-neutral-200 border-b sm:border-b-1 p-6 sm:p-0"
  >
    <div class="flex items-baseline gap-6 sm:gap-12">
      <button class="sm:hidden">
        <MenuIcon />
      </button>
      <p class="text-2xl sm:text-3xl font-bold text-grayish-blue-700">
        sneakers
      </p>
      <MainNav />
    </div>
    <div class="flex items-center ml-auto gap-8 sm:gap-12">
      <button>
        <CartIcon />
      </button>
      <Avatar :src="ProfileImg" alt="user profile" />
    </div>
  </header>
</template>
