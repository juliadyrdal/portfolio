<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <section class="container mx-auto mt-12">
    <RouterLink to="/drops">&#8592;<span class="ml-4 underline uppercase text-sm">Drops Project</span></RouterLink>
  </section>
  <section class="container mx-auto mt-12 font-sans text-black">
    <h1 class="py-4 text-8xl font-medium">Persona</h1>
    <p class="py-8 w-2/3 leading-8">As the primary goal of the design is to solve the target users’ problems, I have included a Persona, which is a model for representing qualitative data, in a way that emphasises goals and frustrations that are relevant for the design context, and facilitates empathy from designers and other stakeholders, through the personification of a group or type of users.</p>
    <p class="py-8 w-2/3 leading-8">I have created the primary persona ‘Naomi Jacobsen’, by synthesising behaviours, motivations and attitudes from the actual target users who were part of the primary research, supplemented with reliable secondary data about millennials and their attitudes towards environmental issues and their awareness of their own water consumption, into a composite archetype. This qualitative model is personified, to elicit empathy, and thus a deeper understanding of the cognitive and emotional processes behind user goals. I will use ‘her’ to validate, inform and shape the design concept, between the user test/prototype stages of the design cycle.</p>
    <p class="py-8 w-2/3 leading-8">As the design will not be viable if it does not meet the goals of the actual users, it is crucial that the persona model accurately represents these goals, by accouniting for the different levels of emotional processing involved. In order to meet user goals on all three levels of emotional and cognitive processing, i.e. visceral, behavioural and reflective, as described by Don Norman (Norman), I have analysed and synthesised the behaviours, attitudes and motivations of the research participants, according to the method laid out by Cooper, Reimann, Cronin and Noessel (Cooper et al.). The result is a set of Persona goals ordered into three levels; ‘Experience goals’, ‘end goals’ and ‘life goals’, equpping me with a persona to validate the design response on all three levels.</p>
  </section>
  <section class="container mx-auto mt-16">
    <img src="../assets/drops-persona.png" />
  </section>
</template>
