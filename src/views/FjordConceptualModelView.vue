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
      <h2 class="pt-20 text-lg font-medium uppercase">Conceptual and Mental Model</h2>
      <h1 class="py-4 w-4/6 text-8xl font-medium">Designing for how agents think</h1>
    </section>
    <section class="mt-32">
      <div class="py-24 bg-surface-light">
        <div class="container mx-auto grid grid-cols-2 gap-24">
          <div class="flex flex-col justify-center">
            <p class="2xl:text-lg 2xl:leading-9 leading-7">When an agent comes to the Fjordtours B2B portal to complete a task in their work flow, they have to translate what it is that they want to do, into the operations provided by the tool. This translation requires more cognitive effort if the operations offered maps poorly onto the users’ goal (referred to by cognitive psychologists as the gulf of execution), and to their expectations and mental model of how the interface should work (Norman and Draper, 1986).</p>
            <p class="pt-20 text-5xl font-medium text-primary-medium">“A conceptual model consists of the concepts a user needs to know in order to use the interface.”</p>
          </div>
          <div>
            <img src="../assets/operating-switchboard.png" alt="Vintage photo of phone operator">
            <p class="pt-4 text-graydark uppercase">An Operator learning to use a complex interface</p>
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto py-44 pt-48">
      <p class="2xl:text-lg 2xl:leading-9 leading-7 w-5/6">The more cognitive effort the user has to expend in order to translate their task into the steps they need to take in order to complete it, the more distracted they become from their own work flow, as they are forced to shift their attention from their task to problem solving their way through the interface. In addition to being frustrating, these interruptions and cognitive demands slow the user down, preventing this part of their work flow from becoming automatic.</p>
    </section>
    <section class="bg-surface-light">
      <div class="container mx-auto py-32 grid grid-cols-2 gap-24">
        <p class="w-5/6 2xl:text-lg leading-7 2xl:leading-9">The B2B portal is an intrinsic part of the users’ work flow and crucial to their ability to perform their jobs. The portal should be a tool to support them in completing the tasks (involving Fjordtours) that they need to in order to reach their goals. So how do we support the users’ own tasks, goals and work flows? By creating a conceptual model of the interface that the users understand, i.e. that matches their mental model as closely as possible.</p>
        <p class="w-5/6 2xl:text-lg leading-7 2xl:leading-9">A conceptual model consists of the concepts a user needs to know in order to use the interface. The  model should be focused on the user’s tasks, and only include the concepts necesarry to complete these tasks, as every additional concept increases the complexity of the interface, making it more difficult to learn. For the conceptual model to be easy to understand, there needs to be consistency between the systems’s objects, actions and attributes, predictability of system, as well as task focused, consistent terminology.</p>
      </div>
    </section>
  </main>
</template>
