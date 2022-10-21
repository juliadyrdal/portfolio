<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="container mx-auto mt-12">
    <RouterLink to="/drops">&#8592;<span class="ml-4 underline uppercase text-sm">Drops Project</span></RouterLink>
  </section>
  <section class="container mx-auto mt-16">
    <img src="../assets/drops-context-scenario.png" />
  </section>
</template>
