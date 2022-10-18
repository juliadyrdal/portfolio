<script setup>
import { RouterLink, RouterView } from "vue-router";

const props = defineProps({
  projectType: String,
  duration: String,
  role: String,
  prototypeLink: String,
})
</script>

<template>
<section>
      <div class="container mx-auto pb-12">
        <h2 class="text-4xl font-semibold">Case summary</h2>
        <div class="mt-6 pt-6 border border-black border-l-0 border-b-0 border-r-0">
          <ul class="flex pt-1">
            <li class="mr-12 flex items-center text-sm"><img src="../../assets/icons/academic.svg" alt="icon" class="pr-2 w-6"><span class="pr-1 font-semibold">Project type:</span>{{ projectType }}</li>
            <li class="mr-12 flex items-center text-sm"><img src="../../assets/icons/calendar.svg" alt="icon" class="pr-2 w-6"><span class="pr-1 font-semibold">Duration:</span>{{ duration }}</li>
            <li class="flex items-center text-sm"><img src="../../assets/icons/person.svg" alt="icon" class="pr-2 w-6"><span class="pr-1 font-semibold">Role:</span>{{ role }}</li>
          </ul>
        </div>
      </div>
      <div class="py-16 bg-surface-light">
        <div class="container mx-auto grid grid-cols-2 gap-32 leading-7">
          <div>
            <p class="pb-6"><span class="font-semibold">Magna sunt aute nisi</span> amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor. Elit exercitation occaecat adipisicing consectetur</p>
            <p><span class="font-semibold">Elit exercitation occaecat</span> adipisicing consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu. Ex nostrud reprehenderit qui magna commodo proident cupidatat dolor id officia cillum laboris consectetur ullamco anim. Magna sunt aute nisi amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit.</p>
          </div>
          <div>
            <p class="pb-6"><span class="font-semibold">Magna sunt aute nisi</span> amet veniam laboris. Dolor ut do consequat non aliqua id adipisicing pariatur in in eiusmod elit. Ullamco sint eiusmod anim veniam sint. Culpa elit ullamco ullamco esse minim ut dolor.</p>
            <p><span class="font-semibold">Elit exercitation occaecat adipisicing</span> consectetur aliqua culpa ea cillum tempor qui ea reprehenderit proident eu. Ex nostrud reprehenderit qui magna commodo proident cupidatat dolor id officia cillum laboris consectetur ullamco anim.</p>
            <div class="grid grid-cols-3 xl:grid-cols-11 mt-12">
              <a target="_blank" :href="prototypeLink" class="col-start-2 col-span-2 xl:col-start-6 xl:col-span-6 px-6 py-4 bg-white text-sm hover:underline">View Figma prototype<img src="../../assets/icons/button-arrow.svg" alt="arrow icon" class="inline pl-4"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>