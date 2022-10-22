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
      <h2 class="pt-20 text-lg font-medium uppercase">Visual and Informational hierarchy</h2>
      <h1 class="py-4 text-8xl font-medium">Anatomy of an order</h1>
    </section>
    <section class="container mx-auto my-16">
      <p class="w-2/3 leading-7">Agents often overlook the information that they need, and as a result contact Fjordtours’ internal booking team with simple inquiries, which is time consuming and inefficient for both parties to deal with. <span class="font-semibold">We know from research that users want more digestible information</span>, which is especially important in a busy work environment.</p>
    </section>
    <section class="py-24 bg-surface-light">
      <div class="container mx-auto">
        <img src="../assets/order-mid-fi.png" alt="Mid fidelity wireframe of order">
      </div>
    </section>
    <section class="container mx-auto my-32 grid grid-cols-1 gap-24">
      <div class="grid grid-cols-12">
        <p class="text-5xl font-semibold">1</p>
        <div class="col-span-8">
          <h2 class="pb-4 text-lg font-semibold">Order level information and actions</h2>
          <p class="leading-7">The informational hierarchy follows the design’s conceptual model, so that it matches other instances of the same information being represented (as well as the user’s mental model), making the order layout predictable, and thus easier to scan for relevant information. The top level in the order hierarchy is the ‘order level’, representing the order as a whole. This level needs to display the most critical information, as it is what the user will see first, as well as information that is not related to individual order items. This level will also display the actions that are possible to take on the order as a whole, as it is crucial for error prevention that the user is able to distinguish these from item level actions.</p>
        </div>
      </div>
      <div class="grid grid-cols-12">
        <p class="text-5xl font-semibold">2</p>
        <div class="col-span-8">
          <h2 class="pb-4 text-lg font-semibold">Order Item level information and actions</h2>
          <p class="leading-7">It needs to be clear from the visual presentation that the order includes sub orders (referred to as order items), and that the related actions only affect this specific component of the order. With this purpose, the detailed order view has been structured similarily to a typical travel itinerary, with the order items and the related information displayed as individual steps, inspired by boarding pass layouts. As this is something that most people, but especially our users have seen countless times, it is easy for them to quickly understand what is being represented, and scan for the information or action they need.</p>
        </div>
      </div>
    </section>
  </main>
</template>
