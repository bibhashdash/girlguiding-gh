<template>
  <div class="main-hero">
    <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />
  </div>
  <section class="section section-video">
    <h2>A challenge like no other</h2>
    <div class="section-video-content">
      <iframe
        class="video"
        src="https://www.youtube.com/embed/raFlhxrNQ2Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        When did you last go on an adventure? When did you last sit beneath the
        stars, toasting marshmallows on the fire? When did you last challenge
        yourself? When did you last go on an adventure? When did you last sit
        beneath the stars, toasting marshmallows on the fire? When did you last
        challenge yourself?
      </p>
    </div>
  </section>

  <section class="section section-cards section-howto">
    <h2>How to join</h2>
    <div class="cards-container signup-cards-container">
      <div class="signup-card">
        <div class="signup-card-title">
          <i class="bi signup-bi bi-envelope-open"></i>
          <h3>Register Interest</h3>
        </div>

        <p>
          You'll be asked for your contact details and a few key pieces of
          information about your daughter.
        </p>
      </div>
      <div class="signup-card">
        <div class="signup-card-title">
          <i class="bi signup-bi bi-person-check"></i>
          <h3>Choose Unit</h3>
        </div>

        <p>
          Your details will be used to suggest several local units. Then it's up
          to you to select the most convenient one.
        </p>
      </div>
      <div class="signup-card">
        <div class="signup-card-title">
          <i class="bi signup-bi bi-telephone-inbound"></i>
          <h3>Await contact</h3>
        </div>

        <p>
          Someone from your chosen unit will contact you, usually within three
          weeks, to provide more specific information.
        </p>
      </div>
      <div class="signup-card">
        <div class="signup-card-title">
          <i class="bi signup-bi bi-hand-thumbs-up"></i>
          <h3>Try out guiding</h3>
        </div>

        <p>
          If spaces are available, the unit will arrange a trial meeting for
          your daughter to attend.
        </p>
      </div>
    </div>
    <p>Ready?</p>
    <button class="btn-main">
      <a
        target="_blank"
        href="https://go.girlguiding.org.uk/join-us/join-as-member/"
        >Let's get you started!</a
      >
    </button>
  </section>
</template>

<script>
import ContactUs from "../components/ContactUsCTA.vue";
import Hero from "../components/Hero.vue";
export default {
  name: "Home",
  components: { ContactUs, Hero },
  data() {
    return {
      headline: "Ready to discover your full potential? Join us!",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/outdoors.png"),
    };
  },
};
</script>

<style>
.section-video {
  padding: 10% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-video h2,
.section-cards h2 {
  font-weight: bold;
  margin-bottom: 1rem;
}
.video {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}
.section-howto {
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup-card {
  margin-bottom: 1rem;
}
.signup-card p {
  width: 85%;
}
.signup-bi {
  margin-right: 1rem;
  color: #c40064;
  font-size: 1;
}
.signup-cards-container {
  margin-bottom: 2rem;
}
.signup-card-title {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
}
.signup-card-title h3 {
  font-size: 1rem;
  font-weight: bold;
}
@media all and (min-width: 768px) {
  .section-video {
    padding: 10% 5%;
  }
  .section-video-content {
    width: 80%;
  }
  .section-howto {
    padding: 10% 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .signup-cards-container {
    display: flex;
    justify-content: space-around;
    padding: 0;
  }

  .signup-bi {
    font-size: 2rem;
  }
  .signup-card-title {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  }
}
@media all and (min-width: 992px) {
  .section-video {
    padding: 5% 10%;
  }
  .section-video-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    align-items: center;
  }
  .section-howto {
    padding: 5% 10%;
  }
}
@media all and (min-width: 992px) {
  .section-video {
    padding: 5% 15%;
  }
  .section-video-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .section-howto {
    padding: 5% 15%;
  }
}
</style>
