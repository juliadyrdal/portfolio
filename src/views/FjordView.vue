<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
import { reactive, ref, computed } from "vue";
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

import conceptImage from '@/assets/lake-red-cabin.png'
import keyFlowsImage from '@/assets/fishing-village.png'
import designPatternsImage from '@/assets/fjordview.png'
import designPrinciplesImage from '@/assets/autumn-landscape.png'
import wireFlowsImage from '@/assets/reindeer.png'
import VisualHierarchyImage from '@/assets/trolltunga.png'

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

const refineItems = reactive([
  {
    imageSrc: conceptImage,
    heading: 'Conceptual and mental model',
    body: 'When an agent comes to the Fjordtours B2B portal to complete a task in their work flow, they have to translate what it is that they want to do, into the operations provided by the tool. This translation requires more cognitive effort if the operations offered maps poorly onto the users??? goal (referred to by cognitive...',
    link: 'fjordtours/conceptual-model',
  },
  {
    imageSrc: keyFlowsImage,
    heading: 'Key task flows',
    body: 'In order to make sure that we create a tool that supports rather than interrupts the user???s workflow, with paths and operations matching what the user is trying to do, we need to build our interface around the key tasks and subtasks that we have identified.',
    link: '/fjordtours/key-task-flows',
  },
  {
    imageSrc: designPatternsImage,
    heading: 'UX design patterns',
    body: 'The solution is based on several different design patterns, as combining them lets us create the tool that fits our users??? unique needs. The search box is partly a command palette, as the user can execute short cut commands when the element is in focus...',
    link: '/fjordtours/design-patterns',
  },
  {
    imageSrc: designPrinciplesImage,
    heading: 'Design principles',
    body: 'As the solution is a tool that agents use as part of their job, in a work environment, ergonomics which support productivity, efficiency and comfort are particularily important. Although they are using the interface as professionals, agents are still users, and the same psychological processes and phenomena still...',
    link: '/fjordtours/design-principles',
  },
  {
    imageSrc: wireFlowsImage,
    heading: 'Wireflows',
    body: 'Efficiency of use is imperative. Because the user work with many moving pieces of which Fjordtours is only one part of the puzzle, they are too busy to deal with systems working against them, or learning to navigate the idiosyncracies of particular systems...',
    link: '/fjordtours/visual-hierarchy',
  },
  {
    imageSrc: VisualHierarchyImage,
    heading: 'Visual and informational hierarchy',
    body: 'Agents often overlook the information that they need, and as a result contact Fjordtours??? internal booking team with simple inquiries, which is time consuming and inefficient for both parties to deal with. We know from research that users want more digestible information, which is especially important in a busy work environment...',
    link: '/fjordtours/visual-hierarchy',
  },
])

const tabOne = ref(true);

const buttonOneClass = computed(() => ({
  'text-white': tabOne.value,
  'font-medium': tabOne.value,
  'bg-[#1D3666]': tabOne.value,
  'text-graydark': !tabOne.value,
  'border': !tabOne.value,
  'border-gray': !tabOne.value,
}));

const buttonTwoClass = computed(() => ({
  'text-white': !tabOne.value,
  'font-medium': !tabOne.value,
  'bg-[#1D3666]': !tabOne.value,
  'text-graydark': tabOne.value,
  'border': tabOne.value,
  'border-gray': tabOne.value,
}));

function showTabTwo() {
  if (tabOne.value === true) {
    tabOne.value = false;
  }
}

function showTabOne() {
  if (tabOne.value === false) {
    tabOne.value = true;
  }
}
</script>

<template>
  <main class="text-black font-sans">
    <PageHeader title="Fjordtours" paragraph="Fjordtours is an inbound tour operator based in Bergen, Norway. They aim to give travellers the quintessential local experience, conceptualised through their branded ???In a Nutshell Tours???, offered both to travel agents and direct to consumers. In a Nutshell Tours combines transport, such as ferries and trains, with local activities en route, including apple cider tasting and kayaking in UNESCO listed landscape. Fjordtours??? flagship product, ???Norway in a Nutshell??? which includes the spectacular Fl??m railway journey, is Norways most popular roundtrip." :imageSrc="imageUrl" />
    <section class="container mx-auto my-20">
      <div class="basis-1/2">
        <h3 class="pt-20 text-lg font-medium uppercase">The catalyst</h3>
        <h2 class="py-10 text-7xl font-semibold leading-10 w-1/4">
          Changes
        </h2>
      </div>
      <div class="mt-12 grid grid-cols-3">
        <div class="pr-2">
          <img src="../assets/floyen.png" class="" />
          <div class="bg-primary-light">
            <p class="px-6 pt-10 text-xl font-regular leading-full">All these changes represent new opportunities for Fjordtours.</p>
            <p class="py-10 pt-6 px-6 text-sm font-semibold uppercase">So what's the problem?</p>
          </div>
        </div>
        <div class="pl-16 mt-10 w-10/12 col-span-2">
          <div class="pb-8">
            <h4 class="text-sm pb-2 font-semibold">Increased focus on B2B sales</h4>
            <p class="text-sm">Going forward, B2B sales will be a prioritised channel for Fjordtours. This represents an opportunity to reach tour operators directly, skipping incoming tour operators. As well as increased margins, these tour operators work with many different destinations and products, and do therefore not have the specialised knowledge required to deal with suppliers directly. This makes tour operators an attractive target customer for Fjordtours.</p>
          </div>
          <div class="mt-8 pb-8">
            <h4 class="text-sm pb-2 font-semibold">Exclusive pre-seller of VY train tickets</h4>
            <p class="text-sm">Fjordtours has become the only advance seller of VY transport tickets, until 90 days prior to departure. Tour operators booking group travel, such as cruise agents, rely on advance transport booking to do their jobs.</p>
          </div>
          <div class="mt-8 pb-8">
            <h4 class="text-sm pb-2 font-semibold">Unprecedented high employee turnover in the travel industry</h4>
            <p class="text-sm">Due to the global pandemic halting international travel, the industry has seen a high employee turnover, as tour operators have had to recruit inexperienced candidates. As a consequence, a high number of agents (users) lack the skill and experience which have normally been assumed.</p>
          </div>
        </div>
      </div>
    </section>
    <CaseProcess />
    <SliderSection titleHeading="Empathise" heading="Research and discovery" introduction="" sliderSectionClass="" introImageSrc="" imageContainerClass="basis-1/2 flex justify-center" imageClass="w-44">
      <template #introduction>
        <div class="py-6 w-5/6 grid grid-cols-2 gap-20">
          <p class="leading-7">Fjordtours??? B2B portal is situated within a complex ecosystem of products, suppliers, different types of clients, travellers, processes and business logic. A good understanding of this ecosystem is a prerequisite for even attempting to empathise with and understand users??? everyday pain points and problems.</p>
          <p class="leading-7">Aquirering this level of expertise is best achieved by a mixture of primary and secondary research, starting with a literature review to prepare for stakeholder interviews, industry expert interview, competitive analysis, and a contextual inquiry.</p>
        </div>
        <div class="mt-20 mb-6 py-12 bg-[#F9F2EF]">
          <div class="w-11/12 flex flex-col justify-center content-center mx-auto">
            <h3 class="pt-2 pb-10 text-xl pb-4 font-semibold leading-6">Research objectives</h3>
            <div class="flex">
              <div class="mr-24 basis-1/2">
                <p class="py-4 pb-12 text-sm leading-6"><span class="font-semibold">Understand the ecosystem</span>, including different roles, products and processes, in which Fjordtours B2B operate.</p>
                <p class="py-4 text-sm leading-6"><span class="font-semibold">Understand Fjordtours??? strategic goals</span>, business logic (within the scope), and limitations.</p>
              </div>
              <div class="basis-1/2">
                <p class="py-4 pb-12 text-sm leading-6"><span class="font-semibold">Understand the user???s mental model</span> and mindset when interfacing with Fjordtour???s B2B booking platform.</p>
                <p class="py-4 text-sm leading-6"><span class="font-semibold">Understand and empathise with the user???s problems</span> and pain points through the entire journey of deciding to, order, and followow up, a booking through Fjordtours.</p>
              </div>
            </div>
          </div>
        </div>
        <h3 class="pt-12 text-xl font-semibold">Research methods</h3>
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
    <section class="my-32">
      <div class="container mx-auto basis-1/2">
        <h3 class="pt-20 text-lg font-medium uppercase">Defining the problem</h3>
        <h2 class="py-6 text-4xl font-semibold leading-10 w-1/4">
          A way forward
        </h2>
      </div>
      <div class="mt-6 flex">
        <img src="../assets/puzzle.png" />
        <div class="px-16 2xl:px-24 bg-primary-light flex flex-col items-center content-center justify-center">
          <div>
             <p class="text-lg font-semibold uppercase">Problem statement</p>
             <p class="py-4 text-lg 2xl:w-10/12">Fjordtours??? two most valued B2B users groups have conflicting needs, goals and mental models when using the interface. Combined with a poor match between the interface and user expectations, this leads to missed opportunities for both users and Fjordtours. How can we create a conceptual model that supports both user groups in their daily workflows?</p>
          </div>
        </div>
      </div>
      <div class="container mx-auto"><p class="pt-6 text-sm uppercase text-gray">Piecing together the puzzle with no reference</p></div>
    </section>
    <section class="mb-24 pb-24">
      <div class="container mx-auto">
        <h3 class="pt-20 text-lg font-medium uppercase">Getting Personal</h3>
        <h2 class="py-6 text-4xl font-semibold leading-10 w-1/4">
          Incoming tour operator
        </h2>
      </div>
        <div class="mt-12">
          <div class="container mx-auto pb-12 pt-6 border border-l-0 border-b-0 border-r-0 border-black">
            <ul class="flex pt-1">
          <li class="mr-12 flex items-center text-sm">
            <img
              src="../assets/icons/birthday.svg"
              alt="icon"
              class="pr-2 w-6"
            /><span class="pr-1 font-semibold">Age </span
            >29
          </li>
          <li class="mr-12 flex items-center text-sm">
            <img
              src="../assets/icons/pin.svg"
              alt="icon"
              class="pr-2 w-6"
            /><span class="pr-1 font-semibold">Bern, </span>Switzerland
          </li>
          <li class="mr-12 flex items-center text-sm">
            <img
              src="../assets/icons/academic.svg"
              alt="icon"
              class="pr-2 w-6"
            /> <span class="pr-1">Studied </span><span class="pr-1 font-semibold"> Art History </span>at Bologna
          </li>
          <li class="flex items-center text-sm">
            <img
              src="../assets/icons/heart.svg"
              alt="icon"
              class="pr-2 w-6"
            />In a relationship
          </li>
        </ul>
      </div>
      <div class="pb-24 bg-surface-light">
        <div class="container mx-auto">
          <div class="mb-12 pt-12">
          <h4 class="text-xl uppercase font-semibold">Caroline Baggini</h4>
        </div>
        <div class="flex">
          <div class="mr-16 basis-1/3">
            <img src="../assets/fjordpersona.png" alt="">
          </div>
          <div class="basis-2/3">
            <h4 class="pb-4 font-semibold">Bio</h4>
            <p class="w-5/6 leading-7">Born to a New Zealand mother and Italian father, Caroline has travelled across the globe since before she could walk. After studying art history in Italy, she worked as an event manager for a Swiss gallery, before being made redundant soon after the pandemic closed down public spaces. As people started travelling internationally again, Caroline got a new job as an agent for an incoming tour operator, selling tours to Northern Europe. She is motivated by giving travellers a unique experience and a memory for life.</p>
            <div>
              <h4 class="mb-6 mt-10 font-semibold">Motivations</h4>
              <div class="grid grid-cols-3">
                <div>
                <h5 class="pb-2 text-sm uppercase">Create positive experiences</h5>
                <img class="w-52" src="../assets/persona-graph-experiences.svg" alt="">
              </div>
              <div>
                <h5 class="pb-2 text-sm uppercase">Career advancement</h5>
                <img class="w-52" src="../assets/persona-graph-career.svg" alt="">
              </div>
              <div>
                <h5 class="pb-2 text-sm uppercase">Enjoyment</h5>
                <img class="w-52" src="../assets/persona-graph-enjoyment.svg" alt="">
              </div>
              </div>
            </div>
            <h4 class="py-6 font-semibold">Pains and frustrations</h4>
            <p class="w-5/6 leading-7"></p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
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
          <input id="search-input" class="block bg-white h-12 w-full min-w-[300px] p-2 pl-12 sm:text-sm mt-1 relative rounded-full placeholder:text-gray-400 outline-none transition-[border-radius] duration-75 ease-in-out" type="text" placeholder="Search for orders, destinations roundtrips, and more..." />
        </div>
      </div>
    </section>
    <SliderSection titleHeading="Refining the solution" heading="Information architecture and structure" sliderSectionClass="bg-white">
      <li v-for="item in refineItems" :key="item.heading">
        <article class="w-80">
          <div class="">
            <img :src="item.imageSrc" alt="" class="" />
            <h4 class="pt-8 text-base font-bold">{{ item.heading }}</h4>
            <div class="h-44">
              <p class="pt-3 text-sm">{{ item.body }}</p>
            </div>
          </div>
          <RouterLink :to="item.link" class="py-4 text-xs font-semibold uppercase hover:underline"><span class="hover:pr-2">Read more</span><img src="../assets/icons/button-arrow.svg" class="inline pl-4 hover:pl-6" /></RouterLink>
        </article>
      </li>
    </SliderSection>
    <section class="pb-24 bg-surface-light">
      <div class="container mx-auto">
        <div class="border border-l-0 border-t-0 border-r-0 border-gray">
      <h3 class="pt-20 text-lg font-medium uppercase">Prototype</h3>
      <h2 class="py-6 text-4xl font-semibold leading-10 w-1/2">
        Adding interactivity
      </h2>
    </div>
    <div class="my-8">
      <button
        @click="showTabOne"
        class="mr-4 px-5 py-2 rounded-full" :class="buttonOneClass"
        >Flow 1</button
      ><button
        @click="showTabTwo"
        class="px-5 py-2 rounded-full" :class="buttonTwoClass"
        >Flow 2</button>
    </div>
    <!-- First tab, tabOne -->
    <div v-if="tabOne" class="mt-16 grid grid-cols-2 gap-12">
      <div>
        <img src="../assets/fjordproto/flow1.png">
      </div>
      <div>
        <h4 class="py-2 text-xl  font-semibold">Flow</h4>
        <p class="pb-12 block">Find info about specific order with key navigation</p>
        <a
              target="_blank"
              href="https://www.figma.com/proto/NiWbRFRECC0q986AiqdROT/Fjordtours-B2B---search?page-id=1%3A2286&node-id=3%3A2495&viewport=1414%2C591%2C0.81&scaling=min-zoom&starting-point-node-id=3%3A2495&show-proto-sidebar=1"
              class="px-6 py-4 bg-white text-sm hover:underline"
              >View Figma prototype<img
                src="../assets/icons/button-arrow.svg"
                alt="arrow icon"
                class="inline pl-4"
            /></a>
      </div>
    </div>
    <!-- Second tab, tabTwo -->
    <div v-if="!tabOne" class="mt-16 grid grid-cols-2 gap-12">
      <div>
        <img src="../assets/fjordproto/flow2.png">
      </div>
      <div>
        <h4 class="py-2 text-xl  font-semibold">Flow</h4>
        <p class="pb-12 block">Contact support regarding specific order</p>
        <a
              target="_blank"
              href="https://www.figma.com/proto/NiWbRFRECC0q986AiqdROT/Fjordtours-B2B---search?page-id=1%3A2286&node-id=3%3A3877&viewport=1414%2C591%2C0.81&scaling=min-zoom&starting-point-node-id=3%3A3877&show-proto-sidebar=1"
              class="px-6 py-4 bg-white text-sm hover:underline"
              >View Figma prototype<img
                src="../assets/icons/button-arrow.svg"
                alt="arrow icon"
                class="inline pl-4"
            /></a>
      </div>
    </div>
      </div>
    </section>
  </main>
</template>
