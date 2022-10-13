<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="bg-primary-light px-8 py-4 text-secondary">
    <nav class="flex justify-between">
      <RouterLink to="/" class="">Julia Dyrdal</RouterLink>
      <span class="">
        <RouterLink to="/projects" class="hover:underline decoration-primary-medium">Projects</RouterLink>
        <RouterLink to="/about" class="pl-8 hover:underline decoration-primary-medium">Experience</RouterLink>
        <a class="pl-8 text-primary-medium underline" href="mailto:hello@juliadyrdal.com">hello@juliadyrdal.com</a>
      </span>
    </nav>
  </header>
</template>
