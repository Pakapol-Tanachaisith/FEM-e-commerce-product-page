<script setup>
import Container from "@/components/Container.vue";
import Header from "@/components/Header.vue";
import ProductGallery from "@/components/ProductGallery.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import Lightbox from "@/components/Lightbox.vue";
import MobileDrawer from "@/components/MobileDrawer.vue";

import { PRODUCT_IMAGES } from "./constant";
</script>

<template>
  <Container>
    <Header />
    <main class="grid sm:grid-cols-2 pb-8 sm:gap-20 sm:py-20">
      <ProductGallery :images="PRODUCT_IMAGES" />
      <ProductInfo />
    </main>
  </Container>
  <Lightbox :images="PRODUCT_IMAGES" />
  <MobileDrawer />
</template>
