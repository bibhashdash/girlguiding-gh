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
        stars, toasting marshmallows on the fire? <br />
        <br />
        When did you last challenge yourself?
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
    <p class="ready">Ready?</p>
    <button class="btn-main">
      <a
        target="_blank"
        href="https://go.girlguiding.org.uk/join-us/join-as-member/"
        >Let's get you started!</a
      >
    </button>
  </section>

  <section class="section section-faq">
    <h2>Frequently Asked Questions</h2>
    <div class="accordion accordion-flush" id="faq-accordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            My child isn't old enough yet, can I apply anyway?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#faq-accordion"
        >
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            When will I be contacted?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#faq-accordion"
        >
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            How will I be contacted?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#faq-accordion"
        >
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            How do I get on the mailing list?
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#faq-accordion"
        >
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Can I apply to more than one unit?
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#faq-accordion"
        >
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            How do I know my details are secure?
          </button>
        </h2>
        <div
          id="collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#faq-accordion"
        >
          <div class="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-briefs">
    <img src="../assets/images/question.png" alt="" />
    <div class="briefs-content">
      <p>Got any more questions or just want to find out more?</p>
      <router-link class="btn-main" to="/contact"> Contact Us</router-link>
    </div>
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
  background: linear-gradient(to bottom, rgba(196, 0, 101), rgb(78, 136, 199));
  color: #fff;
}
.section-video h2,
.section-cards h2 {
  font-weight: bold;
  margin-bottom: 3rem;
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
  box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
  width: 100%;
}
.signup-card {
  margin-bottom: 1rem;
}

.signup-bi {
  margin-right: 1rem;
  color: #c40064;
  font-size: 1rem;
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
.ready {
  font-weight: bold;
}
.section-faq {
  padding: 10% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
  width: 100%;
}
.section-faq h2 {
  margin-bottom: 1rem;
  font-weight: bold;
  margin-bottom: 3rem;
}
.accordion {
  width: 100%;
}
.accordion h2 {
  margin-bottom: 1rem;
  text-decoration: none;
}

.accordion-button {
  background-color: rgb(78, 136, 199) !important;
  font-weight: bold;
  color: #fff !important;
}
.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;
}
.accordion-button:focus {
  border: none !important;
  box-shadow: none !important;
}
.accordion-button:not(.collapsed) {
  background-color: #c40064 !important;
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
    flex-direction: column;
  }

  .signup-bi {
    font-size: 2rem;
  }
  .signup-card-title {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  }
  .signup-card p {
    width: 85%;
  }
  .accordion {
    width: 80%;
  }
}
@media all and (min-width: 992px) {
  .section-video {
    padding: 5% 10%;
    background: linear-gradient(to right, rgba(196, 0, 101), rgb(78, 136, 199));
  }
  .section-video-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    align-items: center;
    justify-items: center;
  }
  .section-video-content p {
    width: 100%;
  }
  .section-howto {
    padding: 5% 10%;
  }
  .signup-cards-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
  }
}
@media all and (min-width: 1200px) {
  .section-video {
    padding: 5% 15%;
  }

  .section-howto {
    padding: 5% 15%;
  }
  .section-faq {
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .accordion {
    width: 50%;
  }
}
</style>
