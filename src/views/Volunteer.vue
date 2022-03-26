<template>
  <div class="main-hero">
    <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />
  </div>
</template>

<script>
import ContactUs from "../components/ContactUsCTA.vue";
import Hero from "../components/Hero.vue";
export default {
  name: "Home",
  components: { ContactUs, Hero },
  data() {
    return {
      headline: "Volunteer with us and help change lives!",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/camp.jpg"),
    };
  },
};
</script>
