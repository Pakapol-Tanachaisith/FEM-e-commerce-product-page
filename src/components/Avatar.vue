<script setup>
defineProps(["src", "alt"]);
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    class="object-cover w-10 h-auto border-2 border-transparent rounded-full cursor-pointer hover:border-primary-500"
  />
</template>
