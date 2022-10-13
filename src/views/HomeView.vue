<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";
import TheHero from "../components/layout/TheHero.vue";

const { data: posts } = useSanityFetcher(`*[_type == "post"]{
      _id,
      author,
      title,
      content
    }[0..10]`);
</script>

<template>
  <TheHero />
  <main class="mx-16">
    <section class="flex justify-center">
      <p class="md:text-sm lg:text-base py-10">Check out my <RouterLink to="/" class="text-primary-medium font-bold underline">UX projects</RouterLink>, my <a href="#" class="text-primary-medium font-bold underline">Github profile</a>, or get in touch on <a href="#" class="text-primary-medium font-bold underline">LinkedIn</a> or at <a href="#" class="text-primary-medium font-bold underline">hello@juliadyrdal.com</a></p>
    </section>

    <section class="container mx-auto p-4">
      <ul v-if="posts">
        <li v-for="post in posts" :key="post._id">
          <h1 class="text-2xl mb-8">{{ post.title }}</h1>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </section>
  </main>
</template>
