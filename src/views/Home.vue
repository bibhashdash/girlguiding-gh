<template>
  <div class="home">
    <!-- <h1>Home</h1> -->
    <div class="hero">
      <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />
    </div>

    <!-- <ContactUs /> -->
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
      headline: "Bog Headline here like this",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: "../assets/images/hero-placeholder.jpg",
    };
  },
};
</script>
