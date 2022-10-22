<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="container mx-auto mt-12">
    <RouterLink to="/fjordtours">&#8592;<span class="ml-4 underline uppercase text-sm">Fjordtours Project</span></RouterLink>
  </section>
  <main class="text-black">
    <section class="container mx-auto mt-12 font-sans text-black">
      <h2 class="pt-20 text-lg font-medium uppercase">Key task flows</h2>
      <h1 class="py-4 w-4/6 text-8xl font-medium">Creating the right tool for the job</h1>
    </section>
    <section class="container mx-auto my-32">
       <p class="w-4/6 2xl:text-lg 2xl:leading-9 leading-7">When an agent comes to the Fjordtours B2B portal to complete a task in their work flow, they have to translate what it is that they want to do, into the operations provided by the tool. This translation requires more cognitive effort if the operations offered maps poorly onto the users’ goal (referred to by cognitive psychologists as the gulf of execution), and to their expectations and mental model of how the interface should work (Norman and Draper, 1986).</p>
    </section>
    <section class="my-16 pt-24 pb-32 bg-surface-light">
      <div class="container mx-auto">
        <h2 class="py-4 text-xl font-semibold">Key task flows</h2>
        <div class="mt-6 grid grid-cols-3 gap-10">
          <div class="flex items-center"><p class="pr-4 text-2xl font-medium">1</p><p>Book a train journey from Bergen to Oslo for 60 people</p></div>
          <div class="flex items-center"><p class="pr-4 text-2xl font-medium">2</p><p>Book a Norway in a Nutshell roundtrip</p></div>
          <div class="flex items-center"><p class="pr-4 text-2xl font-medium">3</p><p>View order by reference</p></div>
          <div class="flex items-center"><p class="pr-4 text-2xl font-medium">4</p><p>Open customer service ticket on specific order</p></div>
          <div class="flex items-center"><p class="pr-4 text-2xl font-medium">5</p><p>View customer service ticket on specific order</p></div>
          <div class="flex items-center"><p class="pr-4 text-2xl font-medium">6</p><p>Check payment status of order</p></div>
        </div>
      </div>
    </section>
  </main>
</template>
