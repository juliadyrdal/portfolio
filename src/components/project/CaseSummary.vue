<script setup>
import { RouterLink, RouterView } from "vue-router";

const props = defineProps({
  projectType: String,
  duration: String,
  role: String,
  prototypeLink: String,
});
</script>

<template>
  <section>
    <div class="container mx-auto pb-12">
      <h2 class="text-4xl font-semibold">Case summary</h2>
      <div
        class="mt-6 pt-6 border border-black border-l-0 border-b-0 border-r-0"
      >
        <ul class="flex pt-1">
          <li class="mr-12 flex items-center text-sm">
            <img
              src="../../assets/icons/academic.svg"
              alt="icon"
              class="pr-2 w-6"
            /><span class="pr-1 font-semibold">Project type:</span
            >{{ projectType }}
          </li>
          <li class="mr-12 flex items-center text-sm">
            <img
              src="../../assets/icons/calendar.svg"
              alt="icon"
              class="pr-2 w-6"
            /><span class="pr-1 font-semibold">Duration:</span>{{ duration }}
          </li>
          <li class="flex items-center text-sm">
            <img
              src="../../assets/icons/person.svg"
              alt="icon"
              class="pr-2 w-6"
            /><span class="pr-1 font-semibold">Role:</span>{{ role }}
          </li>
        </ul>
      </div>
    </div>
    <div class="py-16 bg-surface-light">
      <div class="container mx-auto grid grid-cols-2 gap-32 leading-7">
        <div>
          <p class="pb-6">
            This UX project was a course assignment lasting four weeks, for the UXD programme at Noroff. The brief was open ended, to prototype a (mid-fidelity) solution to encourage its users to conserve water. The greater context was the global fresh water crisis and drinking water shortages in severely affected areas. As water consumption in Norway does not directly affect these global issues, I really wanted to find a way to connect local efforts with global solutions. In order to accomplish this, I did an extensive literary review of sources related to freshwater hydrology, draught causes, as well as the ecosystem of water supply, consumption and waste in Norway.
          </p>
          <p class="pb-6">
            In order to be able to affect behavioural change, I needed to understand the target group's awareness of and attitudes towards water consumption and conservation on an individual, local and global level. This objective guided my primary research, in the form of interviews, leading to the insights that the target group had very low awareness of the consequences of their direct consumption of water, a strong belief that over consumption in Norway didn't matter, and as good as no awareness of how their actions could affect water shortages outside of Norway.
          </p>
          <p>
            From my secondary research I knew that when Norwegians install a (local government approved) water meter in their homes, and thereby switch to a volumetric pricing model, their consumption levels plummet. I also found a pilot project by Bodø municipality, where they tested the use of digital water meters, where the inhabitants had access to their own real-time consumption data, and the ability to share this data with third parties through an API (application programming interface).
          </p>
        </div>
        <div>
          <p class="pb-6">
            As digital water meters have been introduced in several smaller municipalities, where the barrier is lower, I have made the assumption that this upgrade will develop similarily to the mandatory switch to digital electricity meters a few years ago, which now seamlessly supports a number of interfaces for understanding and controlling our home's electricity consumption.
          </p>
          <p>
           On the basis of my secondary research regarding the causes of global shortages, the consequences of local consumption, the target users' behaviour, attitudes and awareness, as well as my assumptions around the adoption of digital water meters, I ideated a solution that would give its users real-time feed back of their water consumption, including costs and enable them to join challenges to reduce their consumption, as well as provide relevant advice for how to do so. In In order to increase awareness of their indirect consumption of water in draught affected areas, users who complete challenges are awarded badges based on volume saved, which is then used to illustrate how much water they consume indirectly from draught affected areas, during common activities, and suggest ways to mitigate it. 
          </p>
          <div class="grid grid-cols-3 xl:grid-cols-11 mt-12">
            <a
              target="_blank"
              :href="prototypeLink"
              class="col-start-2 col-span-2 xl:col-start-6 xl:col-span-6 px-6 py-4 bg-white text-sm hover:underline"
              >View Figma prototype<img
                src="../../assets/icons/button-arrow.svg"
                alt="arrow icon"
                class="inline pl-4"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
