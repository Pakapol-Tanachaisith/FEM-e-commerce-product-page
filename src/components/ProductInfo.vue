<script setup>
import MinusIcon from "@/components/icons/MinusIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import CartIcon from "@/components/icons/CartIcon.vue";
</script>

<template>
  <section class="p-6 flex flex-col gap-12 sm:gap-16">
    <article class="flex flex-col gap-6 sm:gap-12">
      <h2 class="text-primary-500 font-semibold uppercase">sneakers company</h2>
      <h1 class="text-slate-900 capitalize text-5xl font-bold">
        fall limited edition sneakers
      </h1>
      <p class="text-grayish-blue-600">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
    </article>

    <div class="flex items-center justify-between sm:flex-col sm:items-start">
      <div class="flex items-center">
        <p class="font-semibold text-3xl text-grayish-blue-700 mr-4">$125.00</p>
        <span
          class="text-primary-500 text-sm rounded-md bg-primary-100 font-semibold px-2 py-1"
          >50%</span
        >
      </div>
      <s class="font-medium text-lg">$250</s>
    </div>

    <div class="flex flex-col gap-6 sm:flex-row">
      <div
        class="flex justify-between items-center bg-grayish-blue-400 p-4 rounded-lg sm:w-1/3"
      >
        <button class="hover:opacity-70">
          <MinusIcon />
        </button>
        <p class="text-black text-lg font-bold flex-shrink-0">0</p>
        <button class="hover:opacity-70">
          <PlusIcon />
        </button>
      </div>

      <button
        class="flex justify-center items-center bg-primary-500 shadow-lg shadow-primary-200 text-white p-4 rounded-lg sm:flex-grow hover:opacity-70"
      >
        <CartIcon class="fill-white" />
        <p class="ml-4 font-semibold">Add to cart</p>
      </button>
    </div>
  </section>
</template>
