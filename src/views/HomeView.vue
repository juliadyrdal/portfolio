<script setup>
import { useSanityFetcher } from "vue-sanity";
import { RouterLink, RouterView } from "vue-router";

const { data: posts } = useSanityFetcher(`*[_type == "post"]{
      _id,
      author,
      title,
      content
    }[0..10]`);
</script>

<template>
  <section class="bg-primary-light pb-8">
    <div class="container mx-auto flex text-secondary">
      <div class="md:pt-32 lg:pt-40 pl-4 pr-2 basis-1/2">
        <h1 class="text-2xl">
          <span class="pl-6">Hi, I'm </span><span class="inline-block font-black">Julia</span>, a<br />
          <span
            class="inline-block bg-[url('../assets/heading-background.svg')] bg-contain bg-center bg-no-repeat px-4 py-8 text-primary-medium font-serif text-4xl md:text-5xl lg:text-8xl font-black underline decoration-4 decoration-white"
            >UX designer.</span
          >
        </h1>
        <div class="md:mt-4 lg:mt-6 mb-16 mr-24">
          <p class="md:text-base lg:text-lg leading-9">
            I also enjoy making designs come true using
            <span class="bg-primary-light text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full">
              Javascript
            </span>
            ,
            <span class="bg-primary-light text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full"
              >HTML</span
            >
            and
            <span class="bg-primary-light text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full">
              CSS</span
            >, like this portfolio, which I made with
            <span class="bg-primary-light text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full"
              >Vuejs</span
            >,
            <span class="bg-primary-light text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full"
              >Tailwind</span
            >
            and
            <span class="bg-primary-light text-sm font-semibold px-3 py-1 bg-slate-100 rounded-full"
              >Sanity.io</span
            >.
          </p>
        </div>
      </div>
      <div class="pt-20 bg-red-400 basis-1/2">
        <img class="w-full object-cover" src="../assets/hero-illustration.svg" alt="wireframe illustration">
      </div>
    </div>
  </section>
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
