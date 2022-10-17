<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
<section class="container mx-auto my-16">
      <div class="border border-l-0 border-t-0 border-r-0 border-gray">
        <h3 class="pt-20 text-lg font-medium uppercase">Empathise</h3>
        <h2 class="py-6 text-4xl font-semibold leading-10 w-1/2">Research findings</h2>
      </div>
      <div class="my-8"><a href="#" class="mr-4 px-5 py-2 rounded-full text-white font-medium bg-[#1D3666]">Local</a><a href="#" class="px-5 py-2 rounded-full text-graydark border border-gray">Global</a></div>
      <div class="mt-16 grid grid-cols-2">
        <article class="pr-16 py-8 border border-l-0 border-t-0 border-gray">
          <h4 class="text-4xl font-serif font-medium">1</h4>
          <p class="py-3 text-xs uppercase">Insight | Local</p>
          <p class="py-3 text-sm leading-6">People are uncomfortable with the idea that they might waste more water than others, due to their own attitudes towards general wastefulness, and the value they attribute to the opinions of others.</p>
        </article>
        <article class="px-16 py-8 border border-l-0 border-t-0 border-r-0 border-gray">
          <h4 class="text-4xl font-serif font-medium">2</h4>
          <p class="py-3 text-xs uppercase">Insight | Local</p>
          <p class="py-3 text-sm leading-6">People change their water consumption habits when they are incentivised through volumetric pricing models, and are able to monitor their usage and compare against a benchmark.</p>
        </article>
        <article class="pr-16 py-8 border border-l-0 border-t-0 border-b-0 border-gray">
          <h4 class="text-4xl font-serif font-medium">3</h4>
          <p class="py-3 text-xs uppercase">Insight | Local</p>
          <p class="py-3 text-sm leading-6">People are uncomfortable with the idea that they might waste more water than others, due to their own attitudes towards general wastefulness, and the value they attribute to the opinions of others.</p>
        </article>
        <article class="px-16 py-8 border border-l-0 border-t-0 border-r-0 border-gray">
          <h4 class="text-4xl font-serif font-medium">4</h4>
          <p class="py-3 text-xs uppercase">Insight | Local</p>
          <p class="py-3 text-sm leading-6">People change their water consumption habits when they are incentivised through volumetric pricing models, and are able to monitor their usage and compare against a benchmark.</p>
        </article>
        <article class="pr-16 py-8 border border-l-0 border-b-0 border-gray">
          <h4 class="text-4xl font-serif font-medium">5</h4>
          <p class="py-3 text-xs uppercase">Insight | Local</p>
          <p class="py-3 text-sm leading-6">People are uncomfortable with the idea that they might waste more water than others, due to their own attitudes towards general wastefulness, and the value they attribute to the opinions of others.</p>
        </article>
      </div>
    </section>
</template>