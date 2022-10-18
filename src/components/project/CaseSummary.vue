<script setup>
import { RouterLink, RouterView } from "vue-router";

const props = defineProps({
  projectType: String,
  duration: String,
  role: String,
  prototypeLink: String,
});
</script>

<template>
  <section>
    <div class="container mx-auto pb-12">
      <h2 class="text-4xl font-semibold">Case summary</h2>
      <div
        class="mt-6 pt-6 border border-black border-l-0 border-b-0 border-r-0"
      >
        <ul class="flex pt-1">
          <li class="mr-12 flex items-center text-sm">
            <img
              src="../../assets/icons/academic.svg"
              alt="icon"
              class="pr-2 w-6"
            /><span class="pr-1 font-semibold">Project type:</span
            >{{ projectType }}
          </li>
          <li class="mr-12 flex items-center text-sm">
            <img
              src="../../assets/icons/calendar.svg"
              alt="icon"
              class="pr-2 w-6"
            /><span class="pr-1 font-semibold">Duration:</span>{{ duration }}
          </li>
          <li class="flex items-center text-sm">
            <img
              src="../../assets/icons/person.svg"
              alt="icon"
              class="pr-2 w-6"
            /><span class="pr-1 font-semibold">Role:</span>{{ role }}
          </li>
        </ul>
      </div>
    </div>
    <div class="py-16 bg-surface-light">
      <div class="container mx-auto grid grid-cols-2 gap-20 leading-7">
        <slot name="columnOne"></slot>
        <slot name="columnTwo"></slot>
      </div>
    </div>
  </section>
</template>
