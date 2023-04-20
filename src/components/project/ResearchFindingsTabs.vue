<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed } from "vue";

const tabOne = ref(true);

const buttonOneClass = computed(() => ({
  'text-white': tabOne.value,
  'font-medium': tabOne.value,
  'bg-[#1D3666]': tabOne.value,
  'text-graydark': !tabOne.value,
  'border': !tabOne.value,
  'border-gray': !tabOne.value,
}));

const buttonTwoClass = computed(() => ({
  'text-white': !tabOne.value,
  'font-medium': !tabOne.value,
  'bg-[#1D3666]': !tabOne.value,
  'text-graydark': tabOne.value,
  'border': tabOne.value,
  'border-gray': tabOne.value,
}));

function showTabTwo() {
  if (tabOne.value === true) {
    tabOne.value = false;
  }
}

function showTabOne() {
  if (tabOne.value === false) {
    tabOne.value = true;
  }
}
</script>

<template>
  <section class="container mx-4 md:mx-8 lg:mx-auto my-16">
    <div class="border border-l-0 border-t-0 border-r-0 border-gray">
      <h3 class="pt-20 text-lg font-medium uppercase">Empathise</h3>
      <h2 class="py-6 text-4xl font-semibold leading-10 w-1/2">
        Research findings
      </h2>
    </div>
    <div class="my-8">
      <button
        @click="showTabOne"
        class="mr-4 px-5 py-2 rounded-full" :class="buttonOneClass"
        >Local</button
      ><button
        @click="showTabTwo"
        class="px-5 py-2 rounded-full" :class="buttonTwoClass"
        >Global</button>
    </div>
    <!-- First tab, tabOne -->
    <div v-if="tabOne" class="mt-16 grid grid-cols-1 lg:grid-cols-2">
      <article class="pr-0 lg:pr-16 py-8 border border-l-0 border-t-0 border-gray">
        <h4 class="text-4xl font-serif font-medium">1</h4>
        <p class="py-3 text-xs uppercase">Insight | Local</p>
        <p class="py-3 text-sm leading-6">
          People are uncomfortable with the idea that they might waste more
          water than others, due to their own attitudes towards general
          wastefulness, and the value they attribute to the opinions of others.
        </p>
      </article>
      <article
        class="px-0 lg:px-16 py-8 border border-l-0 border-t-0 border-r-0 border-gray"
      >
        <h4 class="text-4xl font-serif font-medium">2</h4>
        <p class="py-3 text-xs uppercase">Insight | Local</p>
        <p class="py-3 text-sm leading-6">
          People change their water consumption habits when they are
          incentivised through volumetric pricing models, and are able to
          monitor their usage and compare against a benchmark.
        </p>
      </article>
      <article
        class="pr-0 lg:pr-16 py-8 border border-l-0 border-t-0 border-b-0 border-gray"
      >
        <h4 class="text-4xl font-serif font-medium">3</h4>
        <p class="py-3 text-xs uppercase">Insight | Local</p>
        <p class="py-3 text-sm leading-6">
          People have very little awareness of their own water consumption,
          because there are no visual cues or guidance, causing them to have no
          sense of relative proportion.
        </p>
      </article>
      <article
        class="px-0 lg:px-16 py-8 border border-l-0 border-t-0 border-r-0 border-gray"
      >
        <h4 class="text-4xl font-serif font-medium">4</h4>
        <p class="py-3 text-xs uppercase">Insight | Local</p>
        <p class="py-3 text-sm leading-6">
          People do not frame water treatment and disposal as a potential reason
          to conserve water, because they have a low awareness of these
          processes and their environmental costs.
        </p>
      </article>
      <article class="pr-0 lg:pr-16 py-8 border border-l-0 border-b-0 border-gray">
        <h4 class="text-4xl font-serif font-medium">5</h4>
        <p class="py-3 text-xs uppercase">Insight | Local</p>
        <p class="py-3 text-sm leading-6">
          Despite awareness of general conservation methods, water intensive
          activities, and a general motivation to decrease their environmental
          impact, people still waste water, because their belief that there are
          no water shortage issues in Norway leads them to assume it’s
          pointless.
        </p>
      </article>
    </div>
    <!-- Second tab, tabTwo -->
    <div v-if="!tabOne" class="mt-16 grid grid-cols-1 lg:grid-cols-2">
      <article class="pr-0 lg:pr-16 py-8 border border-l-0 border-t-0 border-r-0 lg:border-r-1 border-gray">
        <h4 class="text-4xl font-serif font-medium">6</h4>
        <p class="py-3 text-xs uppercase">Insight | Global</p>
        <p class="py-3 text-sm leading-6">
          People believe that their consumer choices can make a difference on global and environmental issues, and are motivated to use their consumer power for good, but because the landscape is so difficult to navigate, they resort to ineffective strategies, ad hoc choices, and not just considering it at all.
        </p>
      </article>
      <article
        class="px-0 lg:px-16 py-8 border border-l-0 border-t-0 border-r-0 border-gray"
      >
        <h4 class="text-4xl font-serif font-medium">7</h4>
        <p class="py-3 text-xs uppercase">Insight | Global</p>
        <p class="py-3 text-sm leading-6">
          People have a low awareness of their personal impact on the gloabal water crisis, because it’s not being communicated via their usual sources of influence.
        </p>
      </article>
      <article
        class="pr-16 py-8 border border-l-0 border-t-0 border-b-0 border-gray"
      >
        <h4 class="text-4xl font-serif font-medium"></h4>
        <p class="py-3 text-xs uppercase"></p>
        <p class="py-3 text-sm leading-6">
          
        </p>
      </article>
    </div>
  </section>
</template>
