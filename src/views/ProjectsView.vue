<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="container mx-auto mt-20 font-sans text-black">
    <h1 class="py-4 text-8xl font-medium">Projects</h1>
    <p class="py-8 w-2/3 leading-8">Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor.</p>
    <p class="py-2 font-semibold"><a href="#" class="pr-2 hover:underline">Github</a> | <a href="#" class="px-2 hover:underline">Behance</a> | <a href="#" class="pl-2 hover:underline">LinkedIn</a></p>
  </section>
  <section class="container mx-auto mt-12">
    <article class="flex items-center bg-surface-secondary">
      <img src="../assets/fjordtours-thumbnail.png" alt="" class="w-2/6">
      <div class="ml-16">
        <p class="pb-2 text-lg text-font-secondary font-medium">Case Study<span class="px-3">|</span>UX design</p>
        <RouterLink to="/fjordtours"><h2 class="my-7 w-3/4 text-black text-4xl font-medium hover:underline"><span class="font-black">Fjordtours</span> – A new workflow for B2B customers</h2></RouterLink>
        <p class="text-sm text-font-secondary uppercase">Student internship</p>
      </div>
    </article>
    <article class="mt-12 flex items-center bg-surface-primary">
      <img src="../assets/drops-thumbnail.png" alt="" class="w-2/6">
      <div class="ml-16">
        <p class="pb-2 text-lg text-font-primary font-medium">Case Study<span class="px-3">|</span>UX design</p>
        <RouterLink to="/drops"><h2 class="my-7 w-3/4 text-black text-4xl font-medium hover:underline"><span class="font-black">Drops</span> – Save water through awareness and incentives</h2></RouterLink>
        <p class="text-sm text-font-secondary uppercase text-font-primary">Course assignment</p>
      </div>
    </article>
  </section>
</template>
