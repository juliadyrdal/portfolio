<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <section class="">
      <div class="container mx-4 md:mx-auto flex text-secondary">
        <div class="md:pt-32 lg:pt-40 pr-2 basis-1/2">
          <div class="flex relative">
            <h1 class="text-2xl">
              <span class="pl-8 text-sm uppercase font-bold">A UX Case Study</span><br />
              <span
                class="inline-block bg-[url('../assets/drops-heading-background.svg')] bg-contain bg-center bg-no-repeat px-8 py-4 text-primary-medium font-serif text-4xl md:text-5xl lg:text-9xl font-black underline decoration-4 decoration-primary-medium"
                >Drops</span
              >
            </h1>
            <div class="flex pt-10 pl-12">
              <img class="w-20" src="../assets/drops-icon.svg" alt="" />
            </div>
          </div>
          <div class="md:mt-12 lg:mt-32 mb-16 mr-24">
            <h2 class="md:text-base lg:text-lg leading-9">
              <span class="block text-sm uppercase font-bold">An app to teach you</span>
              <span class="text-6xl font-serif">How to save water</span>
            </h2>
          </div>
        </div>
        <div class="pt-20 bg-red-400 basis-1/2">
          <img class="lg:w-11/12" src="../assets/drops-header-illustration.svg" alt="wireframe illustration">
        </div>
      </div>
    </section>
    <section class="container mx-4 md:mx-auto my-48 text-secondary flex">
      <div class="basis-1/2">
        <h2 class="pb-5 text-8xl font-serif font-medium"><span class="block font-sans text-lg uppercase font-bold">Global Issues</span>Local Solutions</h2>
        <p class="py-3 pr-8">Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor.</p>
        <p class="py-3 pr-8">Exercitation occaecat adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu. Ex nostrud reprehenderit qui magna commodo proident cupidatat dolor id officia cillum laboris consectetur ullamco anim.</p>
      </div>
      <div class="basis-1/2">
        <img class="ml-auto mr-auto" src="../assets/global-local-illustration.svg" alt="">
      </div>
    </section>
    <section class="text-secondary bg-background-beige">
      <div class="container mx-4 md:mx-auto py-20">
        <h2 class="pb-16 text-5xl text-primary-medium font-serif">Case Summary</h2>
        <ul class="grid md:grid-cols-3 sm:gap-16 lg:gap-24">
          <li class="pb-8 sm:pb-1 md:pb-0">
            <h3 class="py-2 font-bold">Magna sunt aute nisi</h3>
            <p>Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor. Elit exercitation occaecat adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu.</p>
          </li>
          <li class="pb-8 sm:pb-1 md:pb-0">
            <h3 class="py-2 font-bold">Magna sunt aute nisi</h3>
            <p>Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor. Elit exercitation occaecat adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu.</p>
          </li>
          <li class="pb-8 sm:pb-1 md:pb-0">
            <h3 class="py-2 font-bold">Magna sunt aute nisi</h3>
            <p>Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor. Elit exercitation occaecat adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu.</p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
