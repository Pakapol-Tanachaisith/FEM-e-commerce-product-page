<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

import { useCartStore } from "@/stores/cart";
import { PRODUCT_IMAGES } from "@/constant";
import CartIcon from "@/components/icons/CartIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";

const cartStore = useCartStore();

const productThumb = PRODUCT_IMAGES[0].thumb;
const productPrice = 125;
const productName = "Fall Limited Edition Sneakers";
</script>

<template>
  <Popover class="sm:relative">
    <PopoverButton class="relative">
      <span
        v-if="cartStore.count"
        class="absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] text-[8px] text-white bg-primary-500 px-2 rounded-md py-[2px]"
        >{{ cartStore.count }}</span
      >
      <CartIcon />
    </PopoverButton>

    <PopoverPanel
      class="fixed translate-y-12 z-10 left-4 right-4 shadow-2xl rounded-lg bg-white sm:absolute sm:w-[350px] sm:translate-x-[-50%] sm:right-0"
    >
      <div class="p-6">
        <p class="text-black font-semibold">Cart</p>
      </div>
      <hr />
      <div class="p-6">
        <div v-if="cartStore.count">
          <div>
            <div class="flex gap-4 items-center">
              <img
                class="w-12 object-cover rounded-md"
                :src="productThumb"
                alt="fall limited edition sneakers"
              />
              <article class="text-sm text-grayish-blue-600">
                <p>{{ productName }}</p>
                <div class="flex gap-3 mt-2">
                  <p>
                    {{ `$${productPrice.toFixed(2)}` }} x {{ cartStore.count }}
                  </p>
                  <p class="text-grayish-blue-700 font-medium">
                    ${{ (cartStore.count * productPrice).toFixed(2) }}
                  </p>
                </div>
              </article>
              <button class="ml-auto" @click="cartStore.reset">
                <TrashIcon />
              </button>
            </div>
          </div>
          <button
            @click="cartStore.reset"
            class="flex items-center justify-center hover:opacity-50 bg-primary-500 w-full py-3 text-white fill-white rounded-md mt-6"
          >
            Checkout
          </button>
        </div>
        <div v-else class="flex justify-center py-10 items-center">
          <p class="font-semibold text-grayish-blue-600">You cart is empty</p>
        </div>
      </div>
    </PopoverPanel>
  </Popover>
</template>
