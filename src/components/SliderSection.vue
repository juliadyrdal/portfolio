<script setup>
import { RouterLink, RouterView } from "vue-router";
import { defineProps, ref } from "vue";

const props = defineProps({
  titleHeading: String,
  heading: String,
  introImageSrc: String,
  sliderSectionClass: String,
  imageContainerClass: String,
  imageClass: String,
});
</script>

<template>
  <section class="mb-24 pb-16" :class="sliderSectionClass">
    <div class="container mx-auto flex py-12">
      <div class="basis-1/2">
        <h3 class="pt-20 text-lg font-medium uppercase">{{ titleHeading }}</h3>
        <h2 class="py-6 text-4xl font-semibold leading-10 w-1/2">
          {{ heading }}
        </h2>
      </div>
      <div class="" :class="imageContainerClass">
        <img :src="introImageSrc" alt="" class="" :class="imageClass" />
      </div>
    </div>
    <div class="container mx-auto"><slot name="introduction"></slot></div>
    <div class="ml-20 2xl:ml-44 pb-4 overflow-x-scroll scrollbar">
      <ul class="my-12 grid grid-flow-col gap-8">
        <slot></slot>
      </ul>
    </div>
    <div class="container mx-auto">
      <slot name="emphasized"></slot>
    </div>
  </section>
</template>
