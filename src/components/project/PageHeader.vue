<script setup>
import { RouterLink, RouterView } from "vue-router";
import { defineProps, ref } from "vue";

const props = defineProps({
  title: String,
  paragraph: String,
  processLink: String,
  solutionLink: String,
  prototypeLink: String,
  imageSrc: String,
  imageClass: String,
});
</script>

<template>
  <section class="container mx-auto">
    <div class="mt-24 flex">
      <div class="basis-1/2">
        <h1 class="pt-8 text-8xl font-medium">{{ title }}</h1>
        <p class="pt-10 pb-12 leading-8">{{ paragraph }}</p>
      </div>
      <div class="basis-1/2 flex justify-end">
        <img :src="imageSrc" class="w-9/12" :class="imageClass" />
      </div>
    </div>
    <div class="pb-4 mt-8 border border-gray border-t-0 border-l-0 border-r-0">
      <p class="py-2 font-semibold">
        <span class="pr-2 pb-3">Skip to: </span
        ><RouterLink
          :to="{ path: '/drops', hash: '#process' }"
          class="pr-2 underline"
          >Process</RouterLink
        >
        | <a href="#" class="px-2 underline">Solution</a> |
        <a href="#" class="pl-2 underline">Prototype</a>
      </p>
    </div>
  </section>
</template>
