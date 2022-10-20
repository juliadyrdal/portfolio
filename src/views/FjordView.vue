<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
import { reactive } from "vue";
import PageHeader from "../components/project/PageHeader.vue"
import CaseIntroduction from "../components/project/CaseIntroduction.vue"
import SliderSection from "../components/SliderSection.vue"
import ResearchFindings from "../components/project/ResearchFindings.vue"


import imageUrl from '@/assets/fjordtours-logo.svg'
import lakeImage from'@/assets/fjordtours-lake.png'
import CaseProcess from "../components/project/CaseProcess.vue";

import goalsImage from '@/assets/unhappy-operator.png'
import methodsImage from '@/assets/digging-gold.png'
import atomicImage from '@/assets/tired-operator.png'
import analysisImage from '@/assets/thinking-hard.png'

const changeItems = reactive([
  {
    heading: 'Increased focus on B2B sales',
    body: 'Going forward, B2B sales will be a prioritised channel for Fjordtours. This represents an opportunity to reach tour operators directly, skipping incoming tour operators. As well as increased margins, these tour operators work with many different destinations and products, and do therefore not have the specialised knowledge required to deal with suppliers directly. This makes tour operators an attractive target customer for Fjordtours.'
  },
  {
    heading: 'High employee turnover in the travel industry',
    body: 'Due to the global pandemic halting international travel, the industry has seen a high employee turnover, as tour operators have had to recruit inexperienced candidates. As a consequence, a high number of agents (users) lack the skill and experience which have normally been assumed.'
  },
  {
    heading: 'Exclusive pre-seller of VY train tickets',
    body: 'Fjordtours has become the only advance seller of VY transport tickets, until 90 days prior to departure. Tour operators booking group travel, such as cruise agents, rely on advance transport booking to do their jobs.'
  },
])

const researchItems = reactive([
  {
    imageSrc: goalsImage,
    heading: 'Literature review',
    body: 'Literature review of information related to the travel industry, to be better equipped to understand the mental models and problems of the user, and the objectives, operations and business logic of the client.'
  },
  {
    imageSrc: methodsImage,
    heading: 'Competitive analysis',
    body: 'Competitive analysis in order to understand how competitors solve the problem, the expectations users have to a solution, as well as to prepare for contextual inquiry.'
  },
  {
    imageSrc: atomicImage,
    heading: 'Industry expert interview ',
    body: 'Industry expert interview with the head of B2B sales, who has thirty years combined industry experience, the vast majority as an agent/tour operator. This makes her a valuable resource when understanding both the ecosystem and the user.'
  },
  {
    imageSrc: analysisImage,
    heading: 'Contextual inquiry',
    body: 'Contextual inquiry in order to understand the challenges and pain points the users experience through the lifecycle of a Fjordtours booking. A contextual inquiry is ideal for understanding preferred work flows, how the user interacts with the current solution, as well as identifying any gaps inbetween.'
  },
])
</script>

<template>
  <main class="text-black font-sans">
    <PageHeader title="Fjordtours" paragraph="Fjordtours is an inbound tour operator based in Bergen, Norway. They aim to give travellers the quintessential local experience, conceptualised through their branded ‘In a Nutshell Tours’, offered both to travel agents and direct to consumers. In a Nutshell Tours combines transport, such as ferries and trains, with local activities en route, including apple cider tasting and kayaking in UNESCO listed landscape. Fjordtours’ flagship product, ‘Norway in a Nutshell’ which includes the spectacular Flåm railway journey, is Norways most popular roundtrip." :imageSrc="imageUrl" />
    <SliderSection titleHeading="The Catalyst" heading="What's changed?" introduction="" sliderSectionClass="bg-primary-light" introImageSrc="" imageContainerClass="basis-1/2 flex justify-end" imageClass="w-72">
      <template #introduction>
        <img src="../assets/fjordtours-lake-narrow.png" alt="" class="h-72">
      </template>
      <li v-for="item in changeItems" :key="item.heading">
        <article class="w-96">
          <div class="">
            <h4 class="pt-8 text-base font-bold">{{ item.heading }}</h4>
            <p class="pt-3 text-sm">{{ item.body }}</p>
          </div>
        </article>
      </li>
      <template #emphasized>
        <p class="pt-32 pb-16 text-3xl font-semibold w-1/2"><span class="font-normal">All these changes represent new opportunities for Fjordtours.</span><br /> So what’s the problem?</p> 
      </template>
    </SliderSection>
    <CaseProcess />
    <SliderSection titleHeading="Empathise" heading="Research and discovery" introduction="" sliderSectionClass="" introImageSrc="" imageContainerClass="basis-1/2 flex justify-center" imageClass="w-44">
      <template #introduction>
        <div class="pt-6 grid grid-cols-2 gap-20">
          <p class=" text-sm leading-6">Fjordtours’ B2B portal is situated within a complex ecosystem of products, suppliers, different types of clients, travellers, processes and business logic. A good understanding of this ecosystem is a prerequisite for even attempting to empathise with and understand users’ everyday pain points and problems.</p>
          <p class=" text-sm leading-6">Aquirering this level of expertise is best achieved by a mixture of primary and secondary research, starting with a literature review to prepare for stakeholder interviews, industry expert interview, competitive analysis, and a contextual inquiry.</p>
        </div>
        <img src="../assets/fjordtours-fjord-narrow.png" alt="" class="mt-16" />
        <h3 class="pt-32 text-2xl pb-4 font-semibold leading-6 w-9/12">Research objectives</h3>
        <div class="grid grid-cols-2 gap-0 w-5/6">
          <p class="py-4 text-sm leading-6 w-9/12">Understand the ecosystem, including different roles, products and processes, in which Fjordtours B2B operate.</p>
          <p class="py-4 text-sm leading-6 w-9/12">Understand Fjordtours’ strategic goals, business logic (within the scope), and limitations.</p>
          <p class="py-4 text-sm leading-6 w-9/12">Understand the user’s mental model and mindset when interfacing with Fjordtour’s B2B booking platform.</p>
          <p class="py-4 text-sm leading-6 w-9/12">Understand and empathise with the user’s problems and pain points through the entire journey of deciding to, order, and followow up, a booking through Fjordtours.</p>
          <h3 class="pt-12 text-2xl font-semibold">Research methods</h3>
        </div>
      </template>
      <li v-for="item in researchItems" :key="item.heading">
        <article class="w-96">
          <div class="">
            <img :src="item.imageSrc" alt="" class="" />
            <h4 class="pt-8 text-base font-bold">{{ item.heading }}</h4>
            <p class="pt-3 text-sm">{{ item.body }}</p>
          </div>
        </article>
      </li>
    </SliderSection>
    <ResearchFindings />
    <section class="">
      <div class="container mx-auto">
        <div class="basis-1/2">
        <h3 class="pt-20 text-lg font-medium uppercase">Solution</h3>
        <h2 class="py-6 text-4xl font-semibold leading-10 w-1/4">
          A command and control centre
        </h2>
      </div>
      <p class="pt-12 pb-20 w-4/5">A command and control centre, inspired by rich search, predictive search and command palettes, will give expert users the speed, efficiency and flexibility they need. This solution is still easy to use for novice users, due to progressive reveal, combined with the use of concepts which are already familiar to them. From the search box, users can confirm order details, check the availability of products (and continue to booking), discover products by destination, and view and open new customer support tickets.</p>
      </div>
      <div class="py-32 bg-[#F9F2EF]">
        <div class="container mx-auto">
          <label for="search-input" class="sr-only">Search orders, destinations, roundtrips and more</label>
          <input id="search-input" @focusin="showResults" class="block bg-white h-12 w-full min-w-[300px] p-2 pl-12 sm:text-sm mt-1 relative rounded-full placeholder:text-gray-400 outline-none transition-[border-radius] duration-75 ease-in-out" type="text" v-model="query" placeholder="Search for orders, destinations roundtrips, and more..." />
        </div>
      </div>
    </section>
  </main>
</template>
