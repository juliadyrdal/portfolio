<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
import { reactive } from "vue";
import PageHeader from "../components/project/PageHeader.vue"
import CaseIntroduction from "../components/project/CaseIntroduction.vue"
import CaseSummary from "../components/project/CaseSummary.vue"
import CaseProcess from "../components/project/CaseProcess.vue"
import ResearchFindingsTabs from "../components/project/ResearchFindingsTabs.vue"
import CaseChallenges from "../components/project/CaseChallenges.vue"
import CaseResearch from "../components/project/CaseResearch.vue"
import SliderSection from "../components/SliderSection.vue"

import headerImage from '@/assets/drops-hero-image.png'
import personaImage from '@/assets/persona.png'
import scenarioImage from '@/assets/scenario.png'
import problemImage from '@/assets/problem.png'
import ideationImage from '@/assets/ideation.png'
import goalsImage from '@/assets/goals.png'
import methodsImage from '@/assets/methods.png'
import analysisImage from '@/assets/analysis.png'
import researchImage from '@/assets/recycle.svg'

import conceptImage from '@/assets/key-path-1.png'
import keyFlowsImage from '@/assets/ux-flows.png'
import designPatternsImage from '@/assets/information-architecture.png'
import designPrinciplesImage from '@/assets/autumn-landscape.png'
import wireFlowsImage from '@/assets/reindeer.png'
import VisualHierarchyImage from '@/assets/trolltunga.png'


const defineItems = reactive([
  {
    imageSrc: personaImage,
    heading: 'Persona',
    body: 'I have created the primary persona ‘Naomi Jacobsen’, by synthesising behaviours, motivations and attitudes from the actual target users who were part of the primary research, supplemented with reliable secondary data about millennials and their attitudes towards environmental issues and their awareness of their own water consumption, into a composite archetype. This qualitative model is personified, to elicit empathy...',
    link: '/drops/persona'
  },
  {
    imageSrc: scenarioImage,
    heading: 'Context scenario',
    body: 'Naomi wants to be a good person who makes a difference on environmental and global issues without sacrificing too much convenience, but its difficult to navigate information. When thinking about her uninhibited consumption of water, she feels embarassed, especially because she uses more than others. She doesn’t really know why she feels bad, as there is no water shortage in Norway...',
      link: '/drops/context-scenario'
  },
  {
    imageSrc: problemImage,
    heading: 'Problem statement',
    body: 'Users strongly believe that there are no reasons to conserve water in Norway, due to the apparent abundance of water, the low cost and flat-rate pricing model, and the hidden nature of the service and infrastructure. This leads users to waste water through uncritical consumption, causing unnecessary pollution and carbon emissions...',
    link: '/drops/problem-statement'
  },
  {
    imageSrc: ideationImage,
    heading: 'Ideation workshop',
    body: 'I have chosen to use the mind mapping and the brainstorming ideation techniques, as these are more suitable for conducting a solo workshop. I will set a timer for each ideation exercise, to apply some time pressure, which will help to focus on quantity over quality to encourage creativity. Before starting, I’ll read through notes from the secondary research, the problem statement, vision statement, insights, my study...',
    link: '/drops/persona'
  },
])

const researchItems = reactive([
  {
    imageSrc: goalsImage,
    heading: 'Research goals',
    body: 'To discover the target users’ awareness, attitudes and behaviour related to freshwater conservation and consumption on an individual, local and global scale.'
  },
  {
    imageSrc: methodsImage,
    heading: 'Methods and techniques',
    body: 'I used the secondary research method literature review, to get more domain knowledge and to understand the technical challenges. As a primary research methods I interviewed potential users in the target group.'
  },
  {
    imageSrc: problemImage,
    heading: 'Atomic research',
    body: 'I have used the atomic research model to organise research data, including facts, themes and insights. This will be useful for Fjordtours in their continued research, to strengthen insights, use established facts in new insights, and to share knowledge between departments.'
  },
  {
    imageSrc: analysisImage,
    heading: 'Analysis',
    body: 'To analyse the research data from both primary and secondary research, I used affinity mapping to sort facts and discover patterns and themes.'
  },
])

const refineItems = reactive([
  {
    imageSrc: conceptImage,
    heading: 'Key path scenario',
    body: 'Through using her new app Naomi now knows how much water she uses in litres, but still has no idea if this is too much. Through browsing the ‘My data’ section of the app, Naomi discovers that she uses a lot more water than the average in Denmark and much more than what’s needed to cover basic needs...',
    link: 'fjordtours/conceptual-model',
  },
  {
    imageSrc: keyFlowsImage,
    heading: 'Key task flows',
    body: 'In order to make sure that we create a tool that supports rather than interrupts the user’s workflow, with paths and operations matching what the user is trying to do, we need to build our interface around the key tasks and subtasks that we have identified.',
    link: 'https://www.figma.com/file/4x2Zt2zGUSLXMbOFAmJx7G/Drops---IA?node-id=0%3A1',
  },
  {
    imageSrc: designPatternsImage,
    heading: 'Information architecture',
    body: 'The solution is based on several different design patterns, as combining them lets us create the tool that fits our users’ unique needs. The search box is partly a command palette, as the user can execute short cut commands when the element is in focus...',
    link: 'https://www.figma.com/file/4x2Zt2zGUSLXMbOFAmJx7G/Drops---IA?node-id=0%3A1',
  },
  // {
  //   imageSrc: designPrinciplesImage,
  //   heading: 'Design principles',
  //   body: 'As the solution is a tool that agents use as part of their job, in a work environment, ergonomics which support productivity, efficiency and comfort are particularily important. Although they are using the interface as professionals, agents are still users, and the same psychological processes and phenomena still...',
  //   link: '/fjordtours/design-principles',
  // },
  // {
  //   imageSrc: wireFlowsImage,
  //   heading: 'Wireflows',
  //   body: 'Efficiency of use is imperative. Because the user work with many moving pieces of which Fjordtours is only one part of the puzzle, they are too busy to deal with systems working against them, or learning to navigate the idiosyncracies of particular systems...',
  //   link: '/fjordtours/visual-hierarchy',
  // },
  // {
  //   imageSrc: VisualHierarchyImage,
  //   heading: 'Visual and informational hierarchy',
  //   body: 'Agents often overlook the information that they need, and as a result contact Fjordtours’ internal booking team with simple inquiries, which is time consuming and inefficient for both parties to deal with. We know from research that users want more digestible information, which is especially important in a busy work environment...',
  //   link: '/fjordtours/visual-hierarchy',
  // },
])

</script>

<template>
  <main class="text-black font-sans">
    <PageHeader title="Drops" paragraph="The world's freshwater supply is a limited, precious resource that is unevenly distributed across the globe. Areas experiencing severe water shortages are impacted by climate change as well as mismanagement of water resources, which often stems from prioritizing water-intensive industries and agriculture that employ less efficient irrigation techniques. A striking example of this is the cultivation of avocados in a specific region of Chile, where they consume ten times the amount of water needed for the average avocado. This excessive water usage comes at the expense of the local population, who struggle to obtain sufficient water for their basic needs." :imageSrc="headerImage" imageClass="object-cover" />
    <CaseIntroduction titleHeading="Global Issues" heading="Local solutions" subHeading="A user experience design course assignment" paragraph="Due to the apparent abundance of water, Norwegians don’t consider their own consumption of water - it’s always available, on demand, like breathing air.
In addition to being so ubiquitous, water is very cheap and the overwhelming majority pay a flat rate, no matter how much water they use.
Because Norwegians think about water as an inexhaustable, renewable resource, they are not aware of the environmental cost and carbon footprint of their own direct water consumption. These factors might be contributing to the fact that Norwegians on average consume 180 litres of tap water each day, a record in the Nordics, and twice as much as our Danish neighbours." />
    <CaseSummary projectType="course assignment" duration="4 weeks, spring 2022" role="solo UX project">
      <template #columnOne>
        <div>
          <p class="pb-6">
            The assignment brief was open ended, to prototype a (mid-fidelity) solution to encourage its users to conserve water. The greater context was the global fresh water crisis and drinking water shortages in severely affected areas. As water consumption in Norway does not directly affect these global issues, I really wanted to find a way to connect local efforts with global solutions. In order to accomplish this, I did an extensive literary review of sources related to freshwater hydrology, draught causes, as well as the ecosystem of water supply, consumption and waste in Norway.
          </p>
          <p class="pb-6">
            <span class="font-semibold">In order to be able to affect behavioural change</span>, I needed to understand the target group's awareness of and attitudes towards water consumption and conservation on an individual, local and global level. This objective guided my primary research, in the form of interviews, leading to the insights that the target group had very low awareness of the consequences of their direct consumption of water, a strong belief that over consumption in Norway didn't matter, and as good as no awareness of how their actions could affect water shortages outside of Norway.
          </p>
          <p>
            <span class="font-semibold">From my secondary research I knew</span> that when Norwegians install a (local government approved) water meter in their homes, and thereby switch to a volumetric pricing model, their consumption levels plummet. I also found a pilot project by Bodø municipality, where they tested the use of digital water meters, where the inhabitants had access to their own real-time consumption data, and the ability to share this data with third parties through an API
          </p>
        </div>
      </template>
      <template #columnTwo>
        <div>
          <p class="pb-6">
            (application programming interface). As digital water meters have been introduced in several smaller municipalities, where the barrier is lower, I have made the assumption that this upgrade will develop similarily to the mandatory switch to digital electricity meters a few years ago, which now seamlessly supports a number of interfaces for understanding and controlling our home's electricity consumption.
          </p>
          <p>
           On the basis of my secondary research regarding the causes of global shortages, the consequences of local consumption, the target users' behaviour, attitudes and awareness, as well as my assumptions around the adoption of digital water meters, I ideated a solution that would give its users real-time feed back of their water consumption, including costs and enable them to join challenges to reduce their consumption, as well as provide relevant advice for how to do so. In In order to increase awareness of their indirect consumption of water in draught affected areas, users who complete challenges are awarded badges based on volume saved, which is then used to illustrate how much water they consume indirectly from draught affected areas, during common activities, and suggest ways to mitigate it. 
          </p>
          <div class="grid grid-cols-3 xl:grid-cols-11 mt-12">
            <a
              target="_blank"
              href="https://www.figma.com/proto/osSqZdc1q4TgZ1v32x3RPf/Wireframes?page-id=33%3A92&node-id=33%3A97&scaling=scale-down&starting-point-node-id=33%3A93&show-proto-sidebar=1"
              class="col-start-2 col-span-2 xl:col-start-6 xl:col-span-6 px-6 py-4 bg-white text-sm hover:underline"
              >View Figma prototype<img
                src="../assets/icons/button-arrow.svg"
                alt="arrow icon"
                class="inline pl-4"
            /></a>
          </div>
        </div>
      </template>
    </CaseSummary>
    <CaseProcess id="process" />
    <SliderSection titleHeading="Empathise" heading="Research and discovery" introduction="" sliderSectionClass="bg-primary-light" :introImageSrc="researchImage" imageContainerClass="basis-1/2 flex justify-center" imageClass="w-44">
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
    <ResearchFindingsTabs />
    <SliderSection titleHeading="Define and ideate" heading="Finding the solution" sliderSectionClass="bg-white">
      <li v-for="item in defineItems" :key="item.heading">
        <article class="w-96">
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
    <SliderSection titleHeading="Refining the solution" heading="Information architecture and structure" sliderSectionClass="bg-primary-light">
      <li v-for="item in refineItems" :key="item.heading">
        <article class="w-96">
          <div class="">
            <img :src="item.imageSrc" alt="" class="" />
            <h4 class="pt-12 pb-4 text-xl font-medium">{{ item.heading }}</h4>
            <div class="h-6">
              <!-- <p class="pt-3 text-sm">{{ item.body }}</p> -->
            </div>
          </div>
          <a :href="item.link" class="py-4 px-6 bg-white text-xs font-semibold uppercase hover:underline"><span class="hover:pr-2">View full in Figma</span><img src="../assets/icons/button-arrow.svg" class="inline pl-4 hover:pl-6" /></a>
        </article>
      </li>
    </SliderSection>
  </main>
</template>
