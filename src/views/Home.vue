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
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-testimonials"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel-testimonials"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <section class="section section-briefs">
    <img src="../assets/images/leader.png" alt="" />
    <div class="briefs-content">
      <p>
        An elevator pitch to talk about how important the girlguides leaders are
        so that we can link to the leaders section in the button below.
      </p>
      <router-link class="btn-main" to="/leaders">Leaders</router-link>
    </div>
  </section>
  <section class="section section-gallery">
    <h2>Gallery</h2>
    <div class="gallery-preview">
      <img
        class="gallery-preview-image"
        src="../assets/images/gallery1.jpeg"
        alt=""
      />
      <img
        class="gallery-preview-image"
        src="../assets/images/gallery5.jpeg"
        alt=""
      />
      <img
        class="gallery-preview-image"
        src="../assets/images/gallery4.jpeg"
        alt=""
      />
      <img
        class="gallery-preview-image"
        src="../assets/images/gallery6.jpeg"
        alt=""
      />
    </div>
    <router-link class="btn-main" to="/gallery"> View full gallery</router-link>
  </section>
  <section class="section section-briefs">
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
.section-cards {
  padding: 20% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  width: 100%;
}
.section-briefs {
  padding: 20% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
}
.section-briefs img {
  width: 100%;
}
.section-briefs p {
  font-weight: bold;
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
      hsla(211, 52%, 54%, 0.733)
    ),
    url("../assets/images/handstogether.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
}
.section-testimonials h1,
.section-testimonials p {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 2px #000000;
  text-align: center;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  align-self: flex-end;
}
.section-gallery {
  padding: 20% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
  width: 100%;
}
.section-gallery h2 {
  margin-bottom: 1rem;
  font-weight: bold;
}
.gallery-preview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.gallery-preview-image {
  width: 100%;
  margin-bottom: 1rem;
}
@media all and (min-width: 768px) {
  .section {
    padding: 5%;
  }
  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;
    width: 100%;
    padding: 0 10%;
  }
  .unit-card {
    margin: 0;
    width: 100%;
  }
  .unit-card-logo {
    width: 100%;
  }
  .btn-cards {
    width: 100%;
  }
  .section-briefs {
    padding: 5%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
    padding: 5%;
    /* box-shadow: none; */
  }
  .gallery-preview {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
@media all and (min-width: 992px) {
  .section-briefs {
    padding: 5% 10%;
  }
  .section-briefs img {
    width: 30%;
  }
  .section-testimonials {
    padding: 10% 15%;
  }
  .gallery-preview {
    width: 60%;
  }
}
@media all and (min-width: 1200px) {
  .section-cards {
    padding: 5%;
  }
  .unit-card {
    margin: 0;
    width: 80%;
  }
  .section-briefs {
    padding: 1% 15%;
  }
  .briefs-content {
    padding: 0 10%;
  }
  .section-gallery {
    padding: 5% 15%;
  }
}
</style>
