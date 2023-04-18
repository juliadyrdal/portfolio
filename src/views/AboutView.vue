<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";

import CaseSummary from "../components/project/CaseSummary.vue"
</script>

<template>
  <section class="container mx-auto mt-12">
    <RouterLink to="/fjordtours">&#8592;<span class="ml-4 underline uppercase text-sm">Fjordtours Project</span></RouterLink>
  </section>
  <main class="text-black">
    <section class="container mx-auto mt-12 font-sans text-black">
      <h2 class="pt-20 text-lg font-medium uppercase">Curriculum Vitae</h2>
      <h1 class="py-4 w-4/6 text-8xl font-medium">Skills and work experience</h1>
    </section>
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
    <section class="mt-32">
      <div class="py-24 bg-surface-light">
        <div class="container mx-auto grid grid-cols-2 gap-24">
          <div class="flex flex-col justify-center">
            <p class="2xl:text-lg 2xl:leading-9 leading-7">When an agent comes to the Fjordtours B2B portal to complete a task in their work flow, they have to translate what it is that they want to do, into the operations provided by the tool. This translation requires more cognitive effort if the operations offered maps poorly onto the users’ goal (referred to by cognitive psychologists as the gulf of execution), and to their expectations and mental model of how the interface should work (Norman and Draper, 1986).</p>
            <p class="pt-20 text-5xl font-medium text-primary-medium">“A conceptual model consists of the concepts a user needs to know in order to use the interface.”</p>
          </div>
          <div>
            <img src="../assets/operating-switchboard.png" alt="Vintage photo of phone operator">
            <p class="pt-4 text-graydark uppercase">An Operator learning to use a complex interface</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto py-44 pt-48">
      <p class="2xl:text-lg 2xl:leading-9 leading-7 w-5/6">The more cognitive effort the user has to expend in order to translate their task into the steps they need to take in order to complete it, the more distracted they become from their own work flow, as they are forced to shift their attention from their task to problem solving their way through the interface. In addition to being frustrating, these interruptions and cognitive demands slow the user down, preventing this part of their work flow from becoming automatic.</p>
    </section>
    <section class="bg-surface-light">
      <div class="container mx-auto py-32 grid grid-cols-2 gap-24">
        <p class="w-5/6 2xl:text-lg leading-7 2xl:leading-9">The B2B portal is an intrinsic part of the users’ work flow and crucial to their ability to perform their jobs. The portal should be a tool to support them in completing the tasks (involving Fjordtours) that they need to in order to reach their goals. So how do we support the users’ own tasks, goals and work flows? By creating a conceptual model of the interface that the users understand, i.e. that matches their mental model as closely as possible.</p>
        <p class="w-5/6 2xl:text-lg leading-7 2xl:leading-9">A conceptual model consists of the concepts a user needs to know in order to use the interface. The  model should be focused on the user’s tasks, and only include the concepts necesarry to complete these tasks, as every additional concept increases the complexity of the interface, making it more difficult to learn. For the conceptual model to be easy to understand, there needs to be consistency between the systems’s objects, actions and attributes, predictability of system, as well as task focused, consistent terminology.</p>
      </div>
    </section>
  </main>
</template>

