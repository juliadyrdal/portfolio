<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="bg-primary-light pb-8">
    <div class="container mx-auto flex text-secondary">
      <div class="pt-24 md:pt-32 lg:pt-40 pl-4 pr-2 basis-1/2">
        <p class="sm:text-base md:text-2xl">
          <span class="pl-6 inline-block font-medium">Hi, I'm Julia, a</span>
        </p>
        <div class="inline-block bg-[url('../assets/hero-illustration-short.svg')] bg-contain bg-no-repeat flex justify-start content-center">
          <h1
            class="inline-block lg:pb-5 lg:pt-4 2xl:pb-8 2xl:pt-4 px-2 text-primary-medium font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black underline decoration-2 md:decoration-3 2xl:decoration-4 decoration-white"
            >&nbsp;UX designer.&nbsp;</h1
          >
        </div>
        <div class="pl-4 mt-4 lg:mt-6 mb-16 mr-24">
          <p class="sm:text-sm md:text-base lg:text-lg">
            I also enjoy making designs come true using
            <span class="bg-primary-lighter text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full">
              Javascript
            </span>
            ,
            <span class="bg-primary-lighter text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full"
              >HTML</span
            >
            and
            <span class="bg-primary-lighter text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full">
              CSS</span
            >, like this portfolio, which I made with
            <span class="bg-primary-lighter text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full"
              >Vuejs</span
            >,
            <span class="bg-primary-lighter text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full"
              >Tailwind</span
            >
            and
            <span class="bg-primary-lighter text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full"
              >Sanity.io</span
            >.
          </p>
        </div>
      </div>
      <div class="pt-20 bg-red-400 basis-1/2">
        <img class="w-full object-cover" src="../../assets/hero-illustration.svg" alt="wireframe illustration">
      </div>
    </div>
  </section>
</template>
