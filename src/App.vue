<script setup>
import Container from "@/components/Container.vue";
import Header from "@/components/Header.vue";
import ProductGallery from "@/components/ProductGallery.vue";
import ProductInfo from "@/components/ProductInfo.vue";

import { PRODUCT_IMAGES } from "./constant";
</script>

<template>
  <Container>
    <Header />
    <main class="grid sm:grid-cols-2 pb-8">
      <ProductGallery :images="PRODUCT_IMAGES" />
      <ProductInfo />
    </main>
  </Container>
</template>
