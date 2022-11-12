<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
import { defineProps, ref } from "vue";

const props = defineProps({
  projectTag: String,
  imageSrc: String,
  linkPath: String,
  title: String,
  subTitle: String,
  description: String,
  bgColor: String,
  fontColor: String,
});
</script>

<template>
  <article class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" :class="bgColor">
    <img :src="imageSrc" alt="" class="object-cover w-full h-56 md:h-full" />
    <div class="ml-10 py-8 flex flex-col justify-center lg:col-span-2">
      <p class="pb-2 text-base lg:text-lg font-medium" :class="fontColor">Case Study<span class="px-3">|</span>{{ projectTag }}</p>
      <RouterLink :to="linkPath"><h2 class="my-7 w-3/4 text-black text-3xl md:text-xl lg:text-4xl font-medium hover:underline"><span class="font-black">{{ title }}</span> – {{ subTitle }}</h2></RouterLink>
      <p class="text-xs lg:text-sm uppercase" :class="fontColor">{{ description }}</p>
    </div>
  </article>
</template>
