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
  <article class="flex items-center" :class="bgColor">
    <img :src="imageSrc" alt="" class="w-2/6" />
    <div class="ml-16">
      <p class="pb-2 text-lg font-medium" :class="fontColor">Case Study<span class="px-3">|</span>{{ projectTag }}</p>
      <RouterLink :to="linkPath"><h2 class="my-7 w-3/4 text-black text-4xl font-medium hover:underline"><span class="font-black">{{ title }}</span> – {{ subTitle }}</h2></RouterLink>
      <p class="text-sm uppercase" :class="fontColor">{{ description }}</p>
    </div>
  </article>
</template>
