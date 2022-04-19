<template>
  <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />
  <section class="section section-fullwidth-cta">
    <FullWidthCTA
      :fullWidthCTAtext="fullWidthCTAtext"
      :fullWidthCTAButtonText="fullWidthCTAButtonText"
    />
  </section>

  <div class="leaders">
    <h2>Meet Our Leaders</h2>

    <div class="leaders-container">
      <LeaderCard
        @click="showBio(e, 1)"
        id="leader1"
        class="leader"
        :leaderName="leaderName1"
        :leaderUnits="leaderUnits1"
        :imagesrc="leaderPicSrc1"
      />
      <LeaderCard
        @click="showBio(e, 2)"
        id="leader2"
        class="leader"
        :leaderName="leaderName2"
        :leaderUnits="leaderUnits2"
        :imagesrc="leaderPicSrc2"
      />
      <LeaderCard
        @click="showBio(e, 3)"
        id="leader3"
        class="leader"
        :leaderName="leaderName3"
        :leaderUnits="leaderUnits3"
        :imagesrc="leaderPicSrc3"
      />
      <LeaderCard
        @click="showBio(e, 4)"
        id="leader4"
        class="leader"
        :leaderName="leaderName3"
        :leaderUnits="leaderUnits3"
        :imagesrc="leaderPicSrc3"
      />
      <LeaderCard
        @click="showBio(e, 5)"
        id="leader5"
        class="leader"
        :leaderName="leaderName3"
        :leaderUnits="leaderUnits3"
        :imagesrc="leaderPicSrc3"
      />
    </div>
  </div>
  <section class="section section-briefs">
    <img src="../assets/images/kayak.jpg" alt="" />
    <div class="briefs-content">
      <p>
        An elevator pitch to show how GGUK provide a safe space so that we can
        link to the policies document in the button below.
      </p>

      <router-link class="btn-main" to="/policies">
        View our policies</router-link
      >
    </div>
  </section>
  <section class="section section-briefs reverse">
    <img src="../assets/images/question.png" alt="" />
    <div class="briefs-content">
      <p>Got any questions or just want to find out more?</p>
      <router-link class="btn-main" to="/contact"> Contact Us</router-link>
    </div>
  </section>
</template>

<script>
import ContactUs from "../components/ContactUsCTA.vue";
import Hero from "../components/Hero.vue";
import FullWidthCTA from "../components/FullWidthCTA.vue";
import LeaderCard from "../components/LeaderCard.vue";
export default {
  name: "Home",
  components: { ContactUs, Hero, FullWidthCTA, LeaderCard },
  data() {
    return {
      headline: "Your chance to make a real difference",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/leader.png"),
      fullWidthCTAtext:
        "A girguides is leader is someone who can be described in a few words like this with a big button below to get them to volunteer",
      fullWidthCTAButtonText: "Volunteer",
      leaderName1: "Name 1",
      leaderUnits1: "Brownies, Rainbows",
      leaderPicSrc1: require("../assets/images/leaderpic1.jpg"),
      leaderName2: "Name 2",
      leaderUnits2: "Brownies",
      leaderPicSrc2: require("../assets/images/leaderpic2.jpg"),
      leaderName3: "Name 3",
      leaderUnits3: "Guides, Rainbows",
      leaderPicSrc3: require("../assets/images/leaderpic3.jpg"),
    };
  },
  methods: {
    showBio(event, id) {
      const leaders = document.querySelectorAll(".leaders");
      // console.log(leaders);
      // console.log(id);
      const leader = document.querySelector(`#leader${id}`);
      leader.firstElementChild.nextElementSibling.classList.toggle("hidden");
      leader.firstElementChild.nextElementSibling.nextElementSibling.classList.toggle(
        "hidden"
      );
    },
  },
};
</script>

<style>
.leaders-brief,
.leaders {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 10%;
  box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
}

/* .leaders {
  align-items: flex-start;
} */
.leaders-container {
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* flex-wrap: wrap; */
  width: 100%;
  padding: 10% 0;
  display: grid;

  gap: 2.5rem;
}

@media all and (min-width: 576px) {
  .leaders-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .leaders-brief,
  .leaders {
    padding: 5% 15%;
  }

  .leaders-brief p {
    width: 80%;
  }
}
@media all and (min-width: 1200px) {
  .leaders-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
