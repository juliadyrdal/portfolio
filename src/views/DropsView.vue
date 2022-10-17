<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "../components/project/PageHeader.vue"
import CaseIntroduction from "../components/project/CaseIntroduction.vue"
import CaseSummary from "../components/project/CaseSummary.vue"
import CaseProcess from "../components/project/CaseProcess.vue"
import ResearchFindings from "../components/project/ResearchFindings.vue"
import CaseChallenges from "../components/project/CaseChallenges.vue"
import CaseResearch from "../components/project/CaseResearch.vue"
</script>

<template>
  <main class="text-black font-sans">
    <PageHeader title="Drops" paragraph="Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor." />
    <CaseIntroduction titleHeading="Global Issues" heading="Local solutions" subHeading="A user experience design course assignment" paragraphOne="Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor." paragraphTwo="Elit exercitation occaecat adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu. Ex nostrud reprehenderit qui magna commodo proident cupidatat dolor id officia cillum laboris consectetur ullamco anim." />
    <CaseSummary projectType="course assignment" duration="4 weeks, spring 2022" role="solo UX project" />
    <CaseChallenges />
    <CaseProcess id="process" />
    <CaseResearch />
    <ResearchFindings />




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
