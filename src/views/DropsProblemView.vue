<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="container mx-auto mt-12">
    <RouterLink to="/drops">&#8592;<span class="ml-4 underline uppercase text-sm">Drops Project</span></RouterLink>
  </section>
  <section class="container mx-auto mt-12 font-sans text-black">
    <h1 class="py-4 pb-24 text-8xl font-medium">Problem statement</h1>
    <h2 class="font-semibold">Primary problem statement</h2>
    <p class="py-1.5 pb-16 w-2/3 leading-8">Users strongly believe that there are no reasons to conserve water in Norway, due to the apparent abundance of water, the low cost and flat-rate pricing model, and the hidden nature of the service and infrastructure. This leads users to waste water through uncritical consumption, causing unnecessary pollution and carbon emissions.</p>
    <h2 class="font-semibold">Secondary problem statement</h2>
    <p class="py-1.5 pb-16 w-2/3 leading-8">Users believe that their consumer choices make a difference, and wish to consume in an ethical and environmental way, without sacrifising too many convenience aspects. Despite their goals, users inadvertently contribute to water access inequality and scarcity in critical areas, because they hold the belief that they have no influence on global water issues.</p>
    <h2 class="font-semibold">Vision problem statement</h2>
    <p class="py-1.5 pb-16 w-2/3 leading-8">The design solution will give users a sense of their relative and volumetric water consumption, both directly and indirectly (consumer goods), equipping them to adjust against a target or benchmark, while at the same time incentivising users to to conserve directly, and raising users’ awareness about water intesive consumer goods.</p>
  </section>
</template>
