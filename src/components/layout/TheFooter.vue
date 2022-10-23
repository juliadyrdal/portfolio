<script setup>
import { RouterLink, RouterView } from "vue-router";
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <footer class="mt-24 text-black">
    <div class="container mx-auto pt-24 pb-16 flex justify-between text-sm">
      <div class="grid grid-cols-2 gap-4">
        <a class="py-1.5 hover:underline" target="_blank" href="https://github.com/juliadyrdal">Github</a>
        <a class="py-1.5 hover:underline" target="_blank" href="https://www.linkedin.com/in/juliadyrdal">LinkedIn</a>
      </div>
      <div class="grid grid-cols-1">
        <a class="hover:underline" target="_blank" href="mailto:hello@juliadyrdal.com">hello@juliadyrdal.com</a>
      </div>
    </div>
  </footer>
</template>