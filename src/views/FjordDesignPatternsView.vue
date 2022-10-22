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
      <h2 class="pt-20 text-lg font-medium uppercase">Ux Design Patterns</h2>
      <h1 class="py-4 text-8xl font-medium">Search and command</h1>
    </section>
    <section class="container mx-auto my-16">
      <p class="w-2/3 leading-7">The solution is based on several different design patterns, as combining them lets us create the tool that fits our users’ unique needs.</p>
    </section>
    <section class="mt-32">
      <div class="container mx-auto my-12"><h2 class="text-lg font-bold">Command palette with context cues</h2></div>
      <div class="py-16 bg-surface-light">
        <div class="container mx-auto grid grid-cols-2 gap-24">
          <div class="flex flex-col justify-center">
            <img src="../assets/fjord-search-box-active.png" alt="Wireframe of search input and results">
          </div>
          <div class="flex flex-col justify-center">
            <p class="pt-4 leading-7">The search box is partly a command palette, as the user can execute short cut commands when the element is in focus. Another feature inspired by command palettes is that the suggested options (results) depend on specific formatting. As an example, if the user begins the input with a hash symbol, the system “knows” that the user is referring to a specific order, and displays the appropriate actions to be performed on that order.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-48">
      <div class="container mx-auto my-12"><h2 class="text-lg font-bold">Rich search results</h2></div>
      <div class="py-16 bg-surface-light">
        <div class="container mx-auto grid grid-cols-2 gap-24">
          <div class="flex flex-col justify-center">
            <p class="pt-4 leading-7">Search results/suggested options are grouped into descriptive categories, which lets the user immediately scan and navigate to the appropriate option. The group patterns are consistent, which makes using the search box predictable, and in turn becoming automatic.</p>
          </div>
          <div class="flex flex-col justify-center">
            <img src="../assets/search-box-rich-results.png" alt="Wireframe of search input and results">
          </div>
        </div>
      </div>
    </section>
    <section class="mt-48">
      <div class="container mx-auto my-12"><h2 class="text-lg font-bold">Predictive search</h2></div>
      <div class="py-16 bg-surface-light">
        <div class="container mx-auto grid grid-cols-2 gap-24">
          <div class="flex flex-col justify-center">
            <img src="../assets/search-box-predictive.png" alt="Wireframe of search input and results">
          </div>
          <div class="flex flex-col justify-center">
            <p class="pt-4 leading-7">The search box gives the user suggestions based on their input as they type. The suggestions are based on the designs conceptual model, making the functionality intuitive, but also making it easier to provide useful predictions. As an example, if a user searches for a particular destination, the suggestions will display all the objects that have the destination as an attribute, grouped by object type.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
