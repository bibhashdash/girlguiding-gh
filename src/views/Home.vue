<template>
  <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />

  <section class="section section-cards">
    <h2>Ourrs Units</h2>
    <div class="cards-container">
      <div class="unit-card">
        <img
          src="../assets/images/rainbows-logo.png"
          class="unit-card-logo"
          alt=""
        /><router-link class="btn-main btn-cards" to="/units/rainbows">
          More about Rainbows</router-link
        >
      </div>
      <div class="unit-card">
        <img
          src="../assets/images/brownies-logo.png"
          class="unit-card-logo"
          alt=""
        />
        <router-link class="btn-main btn-cards" to="/units/brownies">
          More about Brownies</router-link
        >
      </div>
      <div class="unit-card">
        <img
          src="../assets/images/guides-logo.png"
          class="unit-card-logo"
          alt=""
        />
        <router-link class="btn-main btn-cards" to="/units/guides">
          More about Guides</router-link
        >
      </div>
    </div>
  </section>

  <section class="section section-fullwidth-cta">
    <FullWidthCTA
      :fullWidthCTAtext="fullWidthCTAtext"
      :fullWidthCTAButtonText="fullWidthCTAButtonText"
    />
  </section>
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
      headline: "Welcome to Goole & Howdenshire District Girlguiding",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/home-hero-campfire.jpg"),
      fullWidthCTAtext:
        "We give girls and young women the chance to discover their full potential and encourage them to be a force for good.",
      fullWidthCTAButtonText: "Join Us",
    };
  },
};
</script>
<style>
.section {
  padding: 20% 0;
}
.section-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cards-container {
  display: flex;
  flex-direction: column;
}
.unit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
}
.unit-card-logo {
  width: 280px;
}
.btn-cards {
  margin-top: 1rem;
}
.section-fullwidth-cta {
  background: linear-gradient(
      to right,
      rgba(196, 0, 101, 0.733),
      rgb(78, 136, 199, 0.733)
    ),
    url("../assets/images/holdinghandschildren-2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
@media all and (min-width: 768px) {
  .section {
    padding: 5% 0;
  }
  .cards-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
  .unit-card-logo {
    width: 240px;
  }
  .btn-cards {
    width: 90%;
  }
}
</style>
