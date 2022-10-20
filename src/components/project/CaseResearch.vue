<script setup>
import { RouterLink, RouterView } from "vue-router";
import { defineProps, ref } from "vue";

const props = defineProps({
  introduction: String,
  goals: String,
  methods: String,
  questions: String,
  atomic: String,
  analysis: String,
});
</script>

<template>
	<section class="mt-20 mb-24 pb-16 bg-surface-primary">
      <div class="container mx-auto flex py-12">
        <div class="basis-1/2">
          <h3 class="pt-20 text-lg font-medium uppercase">Empathise</h3>
          <h2 class="py-6 text-4xl font-semibold leading-10 w-1/2">Research and discovery</h2>
          <p class="pt-24 text-sm leading-6 w-9/12">{{ introduction }}</p>
        </div>
        <div class="basis-1/2 flex justify-center">
          <img src="../../assets/recycle.svg" alt="" class="w-44" />
        </div>
      </div>
      <div class="ml-20 pb-4 overflow-x-scroll scrollbar">
        <ul class="my-12 grid grid-flow-col gap-8">
          <li class="">
            <article class="w-96">
              <div class="">
                <img src="../../assets/challenge-1.png" alt="" class="" />
                <h4 class="pt-8 text-base font-bold">Research goals</h4>
                <p class="pt-3 text-sm">{{ goals }}</p>
              </div>
            </article>
          </li>
          <li class="">
            <article class="w-96">
              <div class="">
                <img src="../../assets/challenge-1.png" alt="" class="" />
                <h4 class="pt-8 text-base font-bold">Methods and techniques</h4>
                <p class="pt-3 text-sm">{{ methods }}</p>
              </div>
            </article>
          </li>
          <!-- <li class="">
            <article class="w-96">
              <div class="">
                <img src="../../assets/challenge-1.png" alt="" class="" />
                <h4 class="pt-8 text-base font-bold">Questions workshop</h4>
                <p class="pt-3 text-sm">{{ questions }}</p>
              </div>
            </article>
          </li> -->
          <li class="">
            <article class="w-96">
              <div class="">
                <img src="../../assets/challenge-1.png" alt="" class="" />
                <h4 class="pt-8 text-base font-bold">Atomic research</h4>
                <p class="pt-3 text-sm">{{ atomic }}</p>
              </div>
            </article>
          </li>
          <li class="">
            <article class="w-96">
              <div class="">
                <img src="../../assets/challenge-1.png" alt="" class="" />
                <h4 class="pt-8 text-base font-bold">Analysis</h4>
                <p class="pt-3 text-sm">{{ analysis }}</p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
</template>