<script setup>
import { RouterLink, RouterView } from "vue-router";
import { defineProps, ref } from "vue";

const props = defineProps({
  titleHeading: String,
  heading: String,
  introduction: String,
  introImageSrc: String,
  sliderSectionClass: String,
});
</script>

<template>
  <section class="mt-44 mb-24 pb-16" :class="sliderSectionClass">
    <div class="container mx-auto flex py-12">
      <div class="basis-1/2">
        <h3 class="pt-20 text-lg font-medium uppercase">{{ titleHeading }}</h3>
        <h2 class="py-6 text-4xl font-semibold leading-10 w-1/2">
          {{ heading }}
        </h2>
        <p class="pt-24 text-sm leading-6 w-9/12">{{ introduction }}</p>
      </div>
      <div class="basis-1/2 flex justify-center">
        <img src="../assets/recycle.svg" alt="" class="w-44" />
      </div>
    </div>
    <div class="ml-20 pb-4 overflow-x-scroll scrollbar">
      <ul class="my-12 grid grid-flow-col gap-8">
        <slot></slot>
      </ul>
    </div>
  </section>
</template>
