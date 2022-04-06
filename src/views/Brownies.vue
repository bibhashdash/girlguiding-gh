<template>
  <div class="home">
    <div class="main-hero">
      <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />
    </div>
    <div class="unit-subdivisions">
      <UnitSubdivisionCard
        :location="location1"
        :ageRange="ageRange1"
        :schedule="schedule1"
      />
      <UnitSubdivisionCard
        :location="location2"
        :ageRange="ageRange2"
        :schedule="schedule2"
      />
      <UnitSubdivisionCard
        :location="location2"
        :ageRange="ageRange2"
        :schedule="schedule2"
      />
      <UnitSubdivisionCard
        :location="location2"
        :ageRange="ageRange2"
        :schedule="schedule2"
      />
    </div>
  </div>
</template>

<script>
import ContactUs from "../components/ContactUsCTA.vue";
import Hero from "../components/Hero.vue";
import UnitSubdivisionCard from "../components/UnitSubdivisionCard.vue";
export default {
  name: "Home",
  components: { ContactUs, Hero, UnitSubdivisionCard },
  data() {
    return {
      headline: "Big headline in here about  Brownies",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/brownies-logo.png"),
      location1: "5 Townsville Road Townsville DN14 XYZ",
      ageRange1: "7-10",
      schedule1: "Mon, Tue, Wed: 6pm-8pm",
      location2: "6 Townsville Road Townsville DN14 XYZ",
      ageRange2: "5-7",
      schedule2: "Tue, Wed, Thur: 7pm-8pm",
    };
  },
};
</script>
