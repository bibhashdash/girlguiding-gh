import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import Policies from "../views/Policies.vue";
import Gallery from "../views/Gallery.vue";
import Resources from "../views/Resources.vue";
import Volunteer from "../views/Volunteer.vue";
import Contact from "../views/Contact.vue";
import SignUp from "../views/SignUp.vue";
import Brownies from "../views/Brownies.vue";
import Rainbows from "../views/Rainbows.vue";
import Guides from "../views/Guides.vue";
import Leaders from "../views/Leaders.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/units/brownies",
    name: "Brownies",
    component: Brownies,
  },
  {
    path: "/units/Rainbows",
    name: "Rainbows",
    component: Rainbows,
  },
  {
    path: "/units/guides",
    name: "Guides",
    component: Guides,
  },
  {
    path: "/leaders",
    name: "Leaders",
    component: Leaders,
  },
  {
    path: "/policies",
    name: "Policies",
    component: Policies,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
  },
  {
    path: "/volunteer",
    name: "Volunteer",
    component: Volunteer,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
