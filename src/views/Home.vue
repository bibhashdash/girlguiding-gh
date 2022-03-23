<template>
  <div class="home">
    <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />

    <section class="section section-cards">
      <h2>Our Units</h2>
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
      headline: "Welcome to Goole & Howdenshire District Girlguiding",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/volunteer-hero-placeholder-3.png"),
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
@media all and (min-width: 768px) {
  .section {
    padding: 10% 0;
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
