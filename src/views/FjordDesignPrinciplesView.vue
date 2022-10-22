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
      <h2 class="pt-20 text-lg font-medium uppercase">Ux Design Principles</h2>
      <h1 class="py-4 w-2/3 text-8xl font-medium">Using cognitive psychology</h1>
    </section>
    <section class="container mx-auto my-16">
      <p class="w-2/3 leading-7">As the solution is a tool that agents use as part of their job, in a work environment, ergonomics which support productivity, efficiency and comfort are particularily important. Although they are using the interface as professionals, agents are still users, and the same psychological processes and phenomena still apply. Leveraging cognitive psychology principles, as well as other design principles, can help us <span class="font-semibold">make sure that we treat our B2B users as ordinary users</span>, and build the interface accordingly.</p>
    </section>
    <section class="mt-32">
      <div class="py-16 bg-surface-light">
        <div class="container mx-auto grid grid-cols-2 gap-24">
          <div class="flex flex-col justify-center">
            <img src="../assets/search-box-rich-results.png" alt="Wireframe of search input and results">
          </div>
          <div class="flex flex-col justify-center">
            <p class="pt-4 leading-7">Evaluating search results/suggestions requires the working memory capacaty to remember the search term, something users often do not have, especially in high stress situations (Johnson, 2021). Keeping the search term, suggestions and CTAs simultaneously visible reduces cognitive load by removing the need to remember previous steps.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-32">
      <div class="py-16">
        <div class="container mx-auto grid grid-cols-2 gap-24">
          <div class="flex flex-col justify-start">
            <p class="pt-4 pb-4 leading-7">Suggesting tasks and navigational items based on the user’s search input, and refining them as they type, provides the user with the contextual cues they need to guide them towards the execution of their intended task.</p>
            <p class="pt-4 pb-4 leading-7">This pattern enables expert users to reach their goal as quickly as possible without unecessary steps and distractions. At the same time, it avoids confusing novice users with incomprehensable short cut patterns and terminology, instead guiding them through the available options, without slowing down the expert.</p>
            <p class="pt-4 leading-7">Evaluating search results/suggestions requires the working memory capacaty to remember the search term, something users often do not have, especially in high stress situations (Johnson, 2021). Keeping the search term, suggestions and CTAs simultaneously visible reduces cognitive load by removing the need to remember previous steps.</p>
          </div>
          <div class="flex flex-col justify-start">
            <p class="pt-4 pb-4 leading-7">When using the interface with a clear goal in mind, such as changing a seat reservation, users will tend to focus their attention on the elements that seems related to their goals, often not noticing information that does not stand out as relevant, according to their own mental model. When filtering which information will lead them to their goal, users interpret what they read or see in a very literal way and are thus attracted by the words they immediately associate with the relevant sub tasks.</p>
            <p class="pt-4 leading-7">An agent coming to the B2B portal to book train transport from Bergen to Voss, will be attracted to the words ‘book’, ‘train’, ‘transport’, ‘Bergen’ and ‘Voss’. On the other hand, an agent who is looking for an excursion or something to do for a group travelling to Bergen, will be attracted to the words ‘Bergen’, ‘activity’ and ‘roundtrip’, even though the travellers may end up on the same train journey.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-48">
      <div class="py-16 bg-surface-light">
        <div class="container mx-auto grid grid-cols-2 gap-24">
          <div class="flex flex-col justify-center">
            <img src="../assets/fjord-search-box-active.png" alt="Wireframe of search input and results">
          </div>
          <div class="flex flex-col justify-center">
            <p class="pt-4 leading-7">The proposed design concept lets the user become proficient fast, and thus increasing their speed, without having to learn and remember each step in the process. To illustrate, when a user needs to open a customer service ticket on order #BTS2007, all they need to remember is to search for that particular order, and not the specific keyboard short cut or navigational steps. All the guidance they need are provided when they need it, without cluttering the interface or interrupting their flow, as the common ‘wizard’ pattern has a tendency to do.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-48">
      <div class="py-16">
        <div class="container mx-auto grid grid-cols-2 gap-24">
          <div class="flex flex-col justify-center">
            <p class="pt-4 leading-7">The expert user can speed up their task completion by traversing the suggested options using their keyboard. Shifting the focus to a different option will reveal a context determined quick action/short cut, which avoids cluttering the interface and destracting the (particularily novice)  user by showing more than one CTA.</p>
          </div>
          <div class="flex flex-col justify-center">
            <img src="../assets/search-box-hover.png" alt="Wireframe of search input and results">
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto my-24">
      <p class="py-4 w-5/6 leading-7">When suggestions first appear, the top option will always be focused, revealing the short cut action, and letting the user quickly jump to their most likely task. Expert users are most likely to see this shortcut and to look for other short cuts by moving the focus, due to frequency of use and the high cost of keystrokes and mouse clicks.</p>
      <p class="py-4 w-2/3 leading-7">The novice user, still relying on hovering over the options, will see a CTA describing what happens when they click the option.</p>
    </section>
  </main>
</template>
