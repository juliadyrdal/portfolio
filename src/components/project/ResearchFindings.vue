<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="container mx-auto my-16">
    <div class="border border-l-0 border-t-0 border-r-0 border-gray">
      <h3 class="pt-20 text-lg font-medium uppercase">Empathise</h3>
      <h2 class="py-6 text-4xl font-semibold leading-10 w-1/2">
        Research findings
      </h2>
    </div>
    <!-- Findings -->
    <div class="mt-16 grid grid-cols-2">
      <article class="pr-16 py-8 border border-l-0 border-t-0 border-gray">
        <h4 class="text-4xl font-serif font-medium">1</h4>
        <p class="py-3 text-xs uppercase">Insight</p>
        <p class="py-3 text-sm leading-6">
          <span class="font-semibold">Efficiency of use is imperative.</span>
             Because the user works with many moving pieces of which Fjordtours is only one part of the puzzle, they are too busy to deal with systems working against them, or learning to navigate the idiosyncracies of particular systems.
        </p>
      </article>
      <article
        class="px-16 py-8 border border-l-0 border-t-0 border-r-0 border-gray"
      >
        <h4 class="text-4xl font-serif font-medium">2</h4>
        <p class="py-3 text-xs uppercase">Insight</p>
        <p class="py-3 text-sm leading-6">
          <span class="font-semibold">The usability of the B2B interface is a huge influencing factor in the users’ ability to perform,</span>
             as third party applications are intrinsic to the agent’s general work flow.
        </p>
      </article>
      <article
        class="pr-16 py-8 border border-l-0 border-t-0 border-b-0 border-gray"
      >
        <h4 class="text-4xl font-serif font-medium">3</h4>
        <p class="py-3 text-xs uppercase">Insight</p>
        <p class="py-3 text-sm leading-6">
          <span class="font-semibold">The current interface fails to alliviate users’ pain points and support their challenges,</span>
             because the system does not map to their actual work flows and their mental model.
        </p>
      </article>
      <article
        class="px-16 py-8 border border-l-0 border-t-0 border-r-0 border-b-0 border-gray"
      >
        <h4 class="text-4xl font-serif font-medium">4</h4>
        <p class="py-3 text-xs uppercase">Insight</p>
        <p class="py-3 text-sm leading-6">
           <span class="font-semibold">Different users have different needs depending on their location in the value chain,</span>
             which determines frequency of use,  domain expertise, mindset and mental model.
        </p>
      </article>
    </div>
  </section>
</template>
