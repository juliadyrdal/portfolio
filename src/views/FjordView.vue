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

import imageUrl from '@/assets/fjordtours-logo.svg'
</script>

<template>
  <main class="text-black font-sans">
    <PageHeader title="Fjordtours" paragraph="Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor." :imageSrc="imageUrl" />
    <CaseIntroduction titleHeading="Global Issues" heading="Local solutions" subHeading="A user experience design course assignment" paragraphOne="Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor." paragraphTwo="Elit exercitation occaecat adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu. Ex nostrud reprehenderit qui magna commodo proident cupidatat dolor id officia cillum laboris consectetur ullamco anim." />
    <CaseSummary projectType="student internship" duration="5 weeks, autumn 2022" role="solo UX designer on project" />
  </main>
</template>