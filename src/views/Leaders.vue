<template>
  <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />
</template>

<script>
import ContactUs from "../components/ContactUsCTA.vue";
import Hero from "../components/Hero.vue";
import FullWidthCTA from "../components/FullWidthCTA.vue";
export default {
  name: "Home",
  components: { ContactUs, Hero, FullWidthCTA },
  data() {
    return {
      headline: "Your chance to make a real difference",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/leader.png"),
      fullWidthCTAtext:
        "We give girls and young women the chance to discover their full potential and encourage them to be a force for good.",
      fullWidthCTAButtonText: "Join Us",
    };
  },
};
</script>

<style></style>
