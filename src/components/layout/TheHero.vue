<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="bg-primary-light pb-12">
    <div class="container mx-auto grid grid-cols-2 grid-rows-12 text-secondary">
      <div class="pt-24 md:pt-32 lg:pt-48 2xl:pt-56 pl-4 pr-2 col-span-1 row-span-10">
        <div class="flex items-end relative pb-2">
          <p
            class="pl-6 pb-2 xl:pb-3 2xl:pb-5 inline-block text-lg font-medium"
          >
            Hi, I'm<span class="pl-20 xl:pl-24 2xl:pl-32">a</span>
          </p>
          <img
            src="../../assets/multiplayerandavatar.png"
            alt=""
            class="absolute left-7 xl:left-3 2xl:left-1 bottom-2 w-1/4"
          />
        </div>
        <div
          class="inline-block bg-[url('../assets/hero-illustration-short.svg')] bg-contain bg-no-repeat flex justify-start content-center"
        >
          <h1
            class="inline-block lg:pb-5 lg:pt-4 2xl:pb-8 2xl:pt-4 px-2 text-primary-medium font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black underline decoration-2 md:decoration-3 2xl:decoration-4 decoration-white"
          >
            &nbsp;UX designer.&nbsp;
          </h1>
        </div>
        <div class="pl-2 mt-10 lg:mt-12 mr-24">
          <p class="text-base md:text-lg">
            I also enjoy making designs come true using
            <span class="text-primary-medium font-semibold"> Javascript </span>
            ,
            <span class="text-primary-medium font-semibold">HTML</span>
            and
            <span class="text-primary-medium font-semibold"> CSS</span>, like
            this portfolio, which I made with
            <span class="text-primary-medium font-semibold">Vuejs</span>,
            <span class="text-primary-medium font-semibold">Tailwind</span>
            and
            <span class="text-primary-medium font-semibold">Sanity.io</span>.
          </p>
        </div>
      </div>
      <div class="pt-10 col-span-1 row-span-12">
        <img
          class="object-cover"
          src="../../assets/hero-wireframe-window-mobile.png"
          alt="wireframe illustration"
        />
      </div>
      <p class="col-span-2 row-start-8 row-end-10 mt-16git xl:-mt-12 md:text-sm lg:text-base pl-6">Check out my <RouterLink to="/projects" class="text-primary-medium font-bold underline"><span><img src="../../assets/icons/outline-layout.svg" alt="icon" class="inline pl-1.5 pr-1 pb-1"></span>UX projects</RouterLink>, my <a target="_blank" href="https://github.com/juliadyrdal" class="text-primary-medium font-bold underline"><span><img src="../../assets/icons/outline-github.svg" alt="icon" class="inline pl-1.5 pr-1 pb-1"></span>Github profile</a>, or get in touch on <a target="_blank" href="https://www.linkedin.com/in/juliadyrdal" class="text-primary-medium font-bold underline"><span><img src="../../assets/icons/outline-linkedin.svg" alt="icon" class="inline pl-1.5 pr-1 pb-2"></span>LinkedIn</a> or at <a href="mailto:juliadyrdal@pm.me" class="text-primary-medium font-bold underline"><span><img src="../../assets/icons/outline-email.svg" alt="icon" class="inline pl-1.5 pr-1 pb-1"></span>juliadyrdal@pm.me</a></p>
    </div>
  </section>
</template>
