<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "../components/project/PageHeader.vue"
import CaseIntroduction from "../components/project/CaseIntroduction.vue"
import CaseSummary from "../components/project/CaseSummary.vue"
import CaseProcess from "../components/project/CaseProcess.vue"
import ResearchFindingsTabs from "../components/project/ResearchFindingsTabs.vue"
import CaseChallenges from "../components/project/CaseChallenges.vue"
import CaseResearch from "../components/project/CaseResearch.vue"

import imageUrl from '@/assets/drops-thumbnail.png'
</script>

<template>
  <main class="text-black font-sans">
    <PageHeader title="Drops" paragraph="The world’s freshwater is a finite, scarce and unequally distributed resource. Global water shortage areas are affected by climate change, and also the mismanagement of water resources due to the prioritisation given to water intensive industry and agriculture, often using less efficient irrigation methods. One example is the avocados grown in a region of Chile, using ten times as much water as average avocado, while the local population lack enough water to cover their basic needs." :imageSrc="imageUrl" />
    <CaseIntroduction titleHeading="Global Issues" heading="Local solutions" subHeading="A user experience design course assignment" paragraphOne="" paragraphTwo="Because of the visible abundance of water, Norwegians don’t consider their own consumption of water - it’s always available, on demand, like breathing air.
In addition to being so ubiquitous, water is very cheap and the overwhelming majority pay a flat rate, no matter how much water they use.
Because Norwegians think about water as an inexhaustable, renewable resource, they are not aware of the environmental cost and carbon footprint of their own direct water consumption. These factors might be contributing to the fact that Norwegians on average consume 180 litres of tap water each day, a record in the Nordics, and twice as much as our Danish neighbours." />
    <CaseSummary projectType="course assignment" duration="4 weeks, spring 2022" role="solo UX project" prototypeLink="https://www.figma.com/proto/osSqZdc1q4TgZ1v32x3RPf/Wireframes?page-id=33%3A92&node-id=33%3A97&scaling=scale-down&starting-point-node-id=33%3A93&show-proto-sidebar=1" />
    <CaseChallenges />
    <CaseProcess id="process" />
    <CaseResearch introduction="Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint." goals="To discover the target users’ awareness, attitudes and behaviour related to freshwater conservation and consumption on an individual, local and global scale." methods="I used the secondary research method literature review, to get more domain knowledge and to understand the technical challenges. As a primary research methods I interviewed potential users in the target group." questions="" atomic="I have used the atomic research model to organise research data, including facts, themes and insights. This will be useful for Fjordtours in their continued research, to strengthen insights, use established facts in new insights, and to share knowledge between departments." analysis="To analyse the research data from both primary and secondary research, I used affinity mapping to sort facts and discover patterns and themes. " />
    <ResearchFindingsTabs />
  </main>
</template>
