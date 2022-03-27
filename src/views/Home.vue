<template>
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

  <section class="section section-fullwidth-cta">
    <FullWidthCTA
      :fullWidthCTAtext="fullWidthCTAtext"
      :fullWidthCTAButtonText="fullWidthCTAButtonText"
    />
  </section>

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
    <img src="../assets/images/group.jpg" alt="" />
    <div class="briefs-content">
      <p>
        An elevator pitch to show the benefits of volunteering so that we can
        link to the volunteering page in the button below.
      </p>
      <router-link class="btn-main" to="/volunteer">
        Volunteer with us</router-link
      >
    </div>
  </section>

  <section class="section section-testimonials">
    <div
      id="carousel-testimonials"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <h1>
            “A three-deck quote showing a positive review number ONE. We can do
            either just one quote or have a slideshow of many quotes.”
          </h1>
          <p>Alice, age 7</p>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <h1>
            “A three-deck quote showing a positive review number TWO. We can do
            either just one quote or have a slideshow of many quotes.”
          </h1>
          <p>Jolly, age 5</p>
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <h1>
            “A three-deck quote showing a positive review number THREE. We can
            do either just one quote or have a slideshow of many quotes.”
          </h1>
          <p>Fiona, age 10</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-gallery">
    <h2>Gallery</h2>
    <div class="gallery-preview">
      <img
        class="gallery-preview-image"
        src="../assets/images/gallery-placeholder-1.jpg"
        alt=""
      />
      <img
        class="gallery-preview-image"
        src="../assets/images/gallery-placeholder-2.jpg"
        alt=""
      />
      <img
        class="gallery-preview-image"
        src="../assets/images/gallery-placeholder-3.jpg"
        alt=""
      />
      <img
        class="gallery-preview-image"
        src="../assets/images/gallery-placeholder-4.jpg"
        alt=""
      />
    </div>
    <router-link class="btn-main" to="/gallery"> View full gallery</router-link>
  </section>
  <section class="section contactus-cta">
    <ContactUs />
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
.section-briefs {
  padding: 20% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-briefs img {
  width: 100%;
}
.briefs-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-testimonials {
  padding: 20% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
      to right,
      rgba(196, 0, 101, 0.733),
      rgb(78, 136, 199, 0.733)
    ),
    url("../assets/images/handstogether.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.section-testimonials h1,
.section-testimonials p {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 2px #000000;
  text-align: center;
}
.section-gallery {
  padding: 20% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-gallery h2 {
  margin-bottom: 1rem;
  font-weight: bold;
}
.gallery-preview {
  display: flex;
  flex-direction: column;
}
.gallery-preview-image {
  width: 100%;
  margin-bottom: 1rem;
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
    padding: 0 10%;
  }
  .unit-card-logo {
    width: 240px;
  }
  .btn-cards {
    width: 90%;
  }
  .section-briefs {
    padding: 10% 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .section-briefs img {
    width: 50%;
  }
  .briefs-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;
  }
  .reverse {
    flex-direction: row-reverse;
  }
  .section-testimonials {
    padding: 20% 5%;
  }
  .section-gallery {
    padding: 10% 5%;
  }
  .gallery-preview {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
@media all and (min-width: 992px) {
  .section-briefs {
    padding: 10%;
  }
  .section-testimonials {
    padding: 10% 15%;
  }
}
@media all and (min-width: 1200px) {
  .section-briefs {
    padding: 3% 15%;
  }
  .briefs-content {
    padding: 0 10%;
  }
  .section-gallery {
    padding: 10% 15%;
  }
}
</style>
