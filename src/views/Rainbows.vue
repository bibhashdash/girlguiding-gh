<template>
  <div class="home">
    <div class="main-hero">
      <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />
    </div>
    <UnitBrief :unitBrief="unitBrief" />
    <div class="unit-subdivisions">
      <h2>Unit sections</h2>
      <div class="unit-subdivisions-cards-grid">
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
    <section class="section section-fullwidth-cta">
      <FullWidthCTA
        :fullWidthCTAtext="fullWidthCTAtext"
        :fullWidthCTAButtonText="fullWidthCTAButtonText"
      />
    </section>
    <section class="section section-briefs">
      <img src="../assets/images/question.png" alt="" />
      <div class="briefs-content">
        <p>Got any questions or just want to find out more?</p>
        <router-link class="btn-main" to="/contact"> Contact Us</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import ContactUs from "../components/ContactUsCTA.vue";
import Hero from "../components/Hero.vue";
import UnitSubdivisionCard from "../components/UnitSubdivisionCard.vue";
import FullWidthCTA from "../components/FullWidthCTA.vue";
import UnitBrief from "../components/UnitBrief.vue";
export default {
  name: "Home",
  components: { ContactUs, Hero, UnitSubdivisionCard, FullWidthCTA, UnitBrief },
  data() {
    return {
      headline: "Big headline in here about Rainbows",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/rainbows-logo.png"),
      location1: "1 Townsville Road Townsville DN14 XYZ",
      ageRange1: "7-10",
      schedule1: "Mon, Tue, Wed: 6pm-8pm",
      location2: "2 Townsville Road Townsville DN14 XYZ",
      ageRange2: "5-7",
      schedule2: "Tue, Wed, Thur: 7pm-8pm",
      fullWidthCTAtext:
        "We give girls and young women the chance to discover their full potential and encourage them to be a force for good.",
      fullWidthCTAButtonText: "Join Us",
      unitBrief:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    };
  },
};
</script>

<style>
.unit-subdivisions {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex-wrap: wrap; */
  width: 100%;
  padding: 10% 5%;
}
.unit-subdivisions h2 {
  font-weight: bold;
}
.unit-subdivisions-cards-grid {
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
}
@media all and (min-width: 576px) {
  .unit-subdivisions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media all and (min-width: 768px) {
  .unit-subdivisions-cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
}
@media all and (min-width: 992px) {
  .unit-subdivisions {
    padding: 5% 10%;
  }
}
@media all and (min-width: 1200px) {
  .unit-subdivisions-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 5%;
  }
}
</style>
