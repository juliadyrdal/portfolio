<script setup>
import { RouterLink, RouterView } from "vue-router";
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <header class="px-8 py-4 text-secondary" :class="[route.name === 'home' ? 'bg-primary-light' : '']">
    <nav class="flex justify-between">
      <RouterLink to="/" class="">Julia Dyrdal</RouterLink>
      <span class="">
        <RouterLink to="/projects" class="hover:underline underline-offset-2 decoration-2 decoration-primary-medium">Projects</RouterLink>
        <RouterLink to="/about" class="pl-8 hover:underline underline-offset-2 decoration-2 decoration-primary-medium">Experience</RouterLink>
        <a class="pl-8 hover:underline underline-offset-2 decoration-2 decoration-primary-medium" href="mailto:juliadyrdal@pm.me">juliadyrdal@pm.me</a>
      </span>
    </nav>
  </header>
</template>
