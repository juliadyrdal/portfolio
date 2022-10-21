<script>
import { RouterLink, RouterView } from "vue-router";
import { useSanityClient } from 'vue-sanity'
import TheHeader from "./components/layout/TheHeader.vue";

export default {
    name: "App",
    setup() {
        useSanityClient({
            projectId: 'asszxl05',
            dataset: "production",
            apiVersion: "2022-10-09",
            useCdn: process.env.NODE_ENV === "production",
        });
    },
    components: { TheHeader }
}
</script>

<template>
  <TheHeader />

  <RouterView />
</template>

<style scoped>
</style>
