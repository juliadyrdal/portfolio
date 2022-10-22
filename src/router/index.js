import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/drops",
      name: "drops",
      component: () => import("../views/DropsView.vue"),
    },
    {
      path: "/drops/persona",
      name: "drops-persona",
      component: () => import("../views/DropsPersonaView.vue"),
    },
    {
      path: "/drops/context-scenario",
      name: "drops-context-scenario",
      component: () => import("../views/DropsContextScenarioView.vue"),
    },
    {
      path: "/drops/problem-statement",
      name: "drops-problem-statement",
      component: () => import("../views/DropsProblemView.vue"),
    },
    {
      path: "/fjordtours",
      name: "fjordtours",
      component: () => import("../views/FjordView.vue"),
    },
    {
      path: "/fjordtours/conceptual-model",
      name: "fjordtours-conceptual-model",
      component: () => import("../views/FjordConceptualModelView.vue"),
    },
    {
      path: "/fjordtours/key-task-flows",
      name: "fjordtours-key-task-flows",
      component: () => import("../views/FjordKeyTasksView.vue"),
    },
    {
      path: "/fjordtours/design-patterns",
      name: "fjordtours-design-patterns",
      component: () => import("../views/FjordDesignPatternsView.vue"),
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    }
    return { x: 0, y: 0 }; // Go to the top of the page if no hash
  },
});

export default router;
