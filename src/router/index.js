import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "../views/HomeViews.vue";
import AboutViews from "../views/AboutViews.vue";

const routes = [
    { path: "", component: HomeViews },
    { path: "/about", component: AboutViews },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router