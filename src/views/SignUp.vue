<template>
  <div class="home">
    <div class="Signup-hero">
      <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />
    </div>
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
      headline: "Parents, your time to shine is now!",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/hero-placeholder-1.jpg"),
    };
  },
};
</script>
