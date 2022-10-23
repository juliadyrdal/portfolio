<script setup>
import { RouterLink, RouterView } from "vue-router";
import { defineProps, ref } from "vue";

const props = defineProps({
  titleHeading: String,
  heading: String,
  subHeading: String,
  paragraph: String,
});
</script>

<template>
  <section class="container mx-auto my-32">
    <p class="text-lg text-font-primary font-medium">{{ titleHeading }}</p>
    <h2 class="pt-4 pb-4 text-black text-6xl font-medium">{{ heading }}</h2>
    <p
      class="py-3 text-sm text-font-primary font-medium uppercase text-font-primary"
    >
      {{ subHeading }}
    </p>
    <article class="mt-16 flex items-center bg-surface-primary items-stretch">
      <img
        src="../../assets/drops-thumbnail.png"
        alt=""
        class="h-full object-cover"
      />
      <div class="mx-16 pr-12 grid grid-cols-1 gap-6">
        <div class="flex flex-col justify-center">
          <p class="leading-7">{{ paragraph }}</p>
        </div>
      </div>
    </article>
  </section>
</template>
