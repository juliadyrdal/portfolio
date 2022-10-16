<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main class="text-black font-sans">
    <section class="container mx-auto">
      <div class="mt-24 flex">
        <div class="basis-1/2">
          <h1 class="pt-8 text-8xl font-medium">Drops</h1>
          <p class="pt-10 pb-12 leading-8">Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor.</p>
        </div>
        <div class="basis-1/2 flex justify-end">
          <img src="../assets/drops-hero-image.png" class="w-9/12 object-cover" />
        </div>
      </div>
      <div class="pb-4 mt-8 border border-gray border-t-0 border-l-0 border-r-0">
        <p class="py-2 font-semibold"><span class="pr-2 pb-3">Skip to: </span><a href="#" class="pr-2 underline">Process</a> | <a href="#" class="px-2 underline">Solution</a> | <a href="#" class="pl-2 underline">Prototype</a></p>
      </div>
    </section>
    <section class="container mx-auto my-32">
      <p class="text-lg text-font-primary font-medium">Global Issues</p>
      <h2 class="pt-4 pb-4 text-black text-6xl font-medium">Local solutions</h2>
      <p class="py-3 text-sm text-font-primary font-medium uppercase text-font-primary">A user experience design course assignment</p>
      <article class="mt-16 flex items-center bg-surface-primary">
        <img src="../assets/drops-thumbnail.png" alt="" class="w-3/6">
        <div class="mx-16 pr-12">
          <p class="py-4 leading-7">Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor.</p>
          <p class="py-4 leading-7">Elit exercitation occaecat adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu. Ex nostrud reprehenderit qui magna commodo proident cupidatat dolor id officia cillum laboris consectetur ullamco anim.</p>
        </div>
      </article>
    </section>
    <section>
      <div class="container mx-auto pb-12">
        <h2 class="text-4xl font-semibold">Case summary</h2>
        <div class="mt-6 pt-6 border border-black border-l-0 border-b-0 border-r-0">
          <ul class="flex pt-1">
            <li class="mr-12 flex items-center text-sm"><img src="../assets/icons/academic.svg" alt="icon" class="pr-2 w-6"><span class="pr-1 font-semibold">Project type:</span>course assignment</li>
            <li class="mr-12 flex items-center text-sm"><img src="../assets/icons/calendar.svg" alt="icon" class="pr-2 w-6"><span class="pr-1 font-semibold">Duration:</span>4 weeks, spring 2022</li>
            <li class="flex items-center text-sm"><img src="../assets/icons/person.svg" alt="icon" class="pr-2 w-6"><span class="pr-1 font-semibold">Role:</span>solo UX project</li>
          </ul>
        </div>
      </div>
      <div class="py-16 bg-surface-light">
        <div class="container mx-auto grid grid-cols-2 gap-32 leading-7">
          <div>
            <p class="pb-6"><span class="font-semibold">Magna sunt aute nisi</span> amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor. Elit exercitation occaecat adipisicing consectetur</p>
            <p><span class="font-semibold">Elit exercitation occaecat</span> adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu. Ex nostrud reprehenderit qui magna commodo proident cupidatat dolor id officia cillum laboris consectetur ullamco anim. Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit.</p>
          </div>
          <div>
            <p class="pb-6"><span class="font-semibold">Magna sunt aute nisi</span> amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor.</p>
            <p><span class="font-semibold">Elit exercitation occaecat adipisicing</span> consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu. Ex nostrud reprehenderit qui magna commodo proident cupidatat dolor id officia cillum laboris consectetur ullamco anim.</p>
            <div class="grid grid-cols-3 xl:grid-cols-11 mt-12">
              <a href="#" class="col-start-2 col-span-2 xl:col-start-6 xl:col-span-6 px-6 py-4 bg-white text-sm hover:underline">View Figma prototype<img src="../assets/icons/button-arrow.svg" alt="arrow icon" class="inline pl-4"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-32">
      <div class="container mx-auto pb-6 border-black border-t-0 border-l-0 border-r-0">
        <h3 class="py-1 text-lg font-medium uppercase">Challenges</h3>
        <h2 class="py-2 text-4xl font-semibold leading-10 w-1/3">Changing behaviour through influencing attitudes</h2>
      </div>
      <div class="ml-20 overflow-x-scroll scrollbar">
        <ul class="my-12 grid grid-flow-col gap-10">
          <li class="">
            <article class="w-96">
              <div class="">
                <img src="../assets/challenge-1.png" alt="" class="" />
                <p class="pt-6 text-sm"><span class="font-semibold">Magna sunt aute nisi</span> amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint.</p>
              </div>
            </article>
          </li>
          <li class="">
            <article class="w-96">
              <div class="">
                <img src="../assets/challenge-1.png" alt="" class="" />
                <p class="pt-6 text-sm"><span class="font-semibold">Magna sunt aute nisi</span> amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint.</p>
              </div>
            </article>
          </li>
          <li class="">
            <article class="w-96">
              <div class="">
                <img src="../assets/challenge-1.png" alt="" class="" />
                <p class="pt-6 text-sm"><span class="font-semibold">Magna sunt aute nisi</span> amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint.</p>
              </div>
            </article>
          </li>
          <li class="">
            <article class="w-96">
              <div class="">
                <img src="../assets/challenge-1.png" alt="" class="" />
                <p class="pt-6 text-sm"><span class="font-semibold">Magna sunt aute nisi</span> amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint.</p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>








    <!-- <section class="">
      <div class="container mx-4 md:mx-auto flex text-secondary">
        <div class="md:pt-32 lg:pt-40 pr-2 basis-1/2">
          <div class="flex relative">
            <h1 class="text-2xl">
              <span class="pl-6 text-sm uppercase font-bold">A UX Case Study</span><br />
              <span
                class="inline-block pl-4 pb-2 text-drops font-serif font-medium text-9xl"
                >Drops</span
              >
            </h1>
          </div>
          <div class="md:mt-12 lg:mt-12 mb-16 mr-24">
            <h2 class="">
              <span class="block pl-6 text-base font-medium">An app to teach you how to save water</span>
            </h2>
          </div>
        </div>
        <div class="pt-20 bg-red-400 basis-1/2">
          <img class="lg:w-11/12" src="../assets/drops-hero-illustration.png" alt="wireframe illustration">
        </div>
      </div>
    </section>
    <section class="container mx-4 md:mx-auto my-48 text-secondary flex">
      <div class="basis-1/2">
        <h2 class="pb-5 text-8xl font-serif font-medium"><span class="block font-sans text-lg uppercase font-bold">Global Issues</span><span class="text-drops">Local Solutions</span></h2>
        <p class="py-3 pr-8">Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor.</p>
        <p class="py-3 pr-8">Exercitation occaecat adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu. Ex nostrud reprehenderit qui magna commodo proident cupidatat dolor id officia cillum laboris consectetur ullamco anim.</p>
      </div>
      <div class="basis-1/2">
        <img class="ml-auto mr-auto" src="../assets/global-local-illustration.svg" alt="">
      </div>
    </section>
    <section class="text-secondary bg-background-beige">
      <div class="container mx-4 md:mx-auto py-20">
        <h2 class="pb-16 text-5xl text-drops font-serif font-medium">Case Summary</h2>
        <ul class="grid grid-cols-3 pb-12">
          <li class="flex"><img src="../assets/icons/academic.svg" alt="Graduation cap icon" class="pr-3"><p><span class="font-semibold">Project type: </span>course assignment</p></li>
          <li class="flex"><img src="../assets/icons/calendar.svg" alt="Graduation cap icon" class="pr-3"><p><span class="font-semibold">Duration: </span>4 weeks, spring 2022</p></li>
          <li class="flex"><img src="../assets/icons/person.svg" alt="Graduation cap icon" class="pr-3"><p><span class="font-semibold">Role: </span>solo UX project</p></li>
        </ul>
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
    <section class="container mx-4 md:mx-auto my-48 text-secondary">
      <h2 class="pb-5 text-8xl font-serif font-medium"><span class="block font-sans text-lg uppercase font-bold pb-3">Challenges</span><span class="text-drops">Changing behaviour by changing attitudes</span></h2>
      <div class="pt-6 w-3/5 pr-8">
        <p class="py-3 pr-8">Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor.</p>
        <p class="py-3 pr-8">Exercitation occaecat adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu. Ex nostrud reprehenderit qui magna commodo proident cupidatat dolor id officia cillum laboris consectetur ullamco anim.</p>
      </div>
    </section> -->
  </main>
</template>
