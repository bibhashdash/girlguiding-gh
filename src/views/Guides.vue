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
    <div class="section guides-activities">
      <div class="guides-activities-container">
        <h2>Guides Activities</h2>
        <div class="guides-activities-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquid
            voluptate fugiat facere eius sequi, nam saepe reiciendis repellat
            ipsam?
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <img
          class="guides-activities-image"
          src="../assets/images/gallery-placeholder-2.jpg"
          alt=""
        />
      </div>
    </div>
    <section class="section section-cards section-howto">
      <h2>Next Steps</h2>
      <div class="cards-container signup-cards-container">
        <div class="signup-card">
          <div class="signup-card-title">
            <i class="bi volunteer-bi bi-question-circle"></i>
            <h3>Next Step One</h3>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex natus
            provident, illo sequi asperiores dicta?
          </p>
        </div>
        <div class="signup-card">
          <div class="signup-card-title">
            <i class="bi volunteer-bi bi-question-circle"></i>
            <h3>Next Step Two</h3>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex natus
            provident, illo sequi asperiores dicta?
          </p>
        </div>
        <div class="signup-card">
          <div class="signup-card-title">
            <i class="bi volunteer-bi bi-question-circle"></i>
            <h3>Next Step Three</h3>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex natus
            provident, illo sequi asperiores dicta?
          </p>
        </div>
        <div class="signup-card">
          <div class="signup-card-title">
            <i class="bi volunteer-bi bi-question-circle"></i>
            <h3>Next Step Four</h3>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex natus
            provident, illo sequi asperiores dicta?
          </p>
        </div>
      </div>
    </section>
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
      headline: "Big headline in here about Guides",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/guides-logo.png"),
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

<style scoped>
.guides-activities {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 10%;
  background: linear-gradient(to bottom, #c40064, #4e88c7);
  color: #fff;
}
.guides-activities-container {
  display: grid;
  grid-template-columns: auto;
}
.guides-activities h2 {
  font-weight: bold;
  text-align: center;
}
.guides-activities li {
  font-weight: bold;
}
.guides-activities-image {
  width: 100%;
}
@media all and (min-width: 768px) {
  .guides-activities-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .guides-activities-container h2 {
    grid-column: 1 / span2;
    margin-bottom: 2rem;
  }
}
@media all and (min-width: 992px) {
  .guides-activities {
    background: linear-gradient(to right, #c40064, #4e88c7);
    padding: 5% 10%;
  }
}
@media all and (min-width: 1200px) {
  .guides-activities {
    padding: 5% 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .guides-activities-container {
    width: 70%;
  }
}
</style>
