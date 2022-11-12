<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
import ProjectCard from "../components/ui/ProjectCard.vue";

import fjordtoursImage from '@/assets/fjordtours-thumbnail.png'
import dropsImage from '@/assets/drops-thumbnail.png'
</script>

<template>
  <section class="container mx-auto mt-20 font-sans text-black">
    <h1 class="py-4 text-8xl font-medium">Projects</h1>
    <!-- <p class="py-8 w-2/3 leading-8">Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor.</p> -->
    <p class="py-2 pt-8 font-semibold"><a target="_blank" href="https://github.com/juliadyrdal" class="pr-2 hover:underline">Github</a> | <a target="_blank" href="https://www.linkedin.com/in/juliadyrdal" class="pl-2 hover:underline">LinkedIn</a></p>
  </section>
  <section class="container mx-auto mt-12">
    <ProjectCard title="Fjordtours" subTitle="A new workflow for B2B customers" projectTag="UX Design" :imageSrc="fjordtoursImage" linkPath="/fjordtours" description="Student internship" bgColor="bg-surface-secondary" fontColor="text-font-secondary" />
    <ProjectCard class="mt-12" title="Drops" subTitle="Save water through awareness and incentives" projectTag="UX Design" :imageSrc="dropsImage" linkPath="/drops" description="Course assignment" bgColor="bg-surface-primary" fontColor="text-font-primary" />
  </section>
</template>
