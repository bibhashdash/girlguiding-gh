<template>
  <div class="main-hero">
    <Hero :headline="headline" :subdeck="subdeck" :imagesrc="imagesrc" />
  </div>
  <section class="section volunteer-page-intro">
    <h2>Volunteering page intro title</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      reiciendis repellendus deleniti sapiente non tempore vitae totam maxime
      architecto debitis, quis, mollitia dolorum quisquam dolores quod
      aspernatur sunt! Aliquam, dolorum?
    </p>
  </section>

  <section class="section volunteer-page-cards">
    <h2>Types of volunteering</h2>
    <div class="volunteer-cards-container">
      <div class="volunteer-card">
        <div class="volunteer-card-title">
          <i class="bi volunteer-bi bi-question-circle"></i>
          <h3>Vol Type One</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quae
          assumenda odio voluptate voluptatem aperiam?
        </p>
      </div>
      <div class="volunteer-card">
        <div class="volunteer-card-title">
          <i class="bi volunteer-bi bi-question-circle"></i>
          <h3>Vol Type Two</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quae
          assumenda odio voluptate voluptatem aperiam?
        </p>
      </div>
      <div class="volunteer-card">
        <div class="volunteer-card-title">
          <i class="bi volunteer-bi bi-question-circle"></i>
          <h3>Vol Type Three</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quae
          assumenda odio voluptate voluptatem aperiam?
        </p>
      </div>
    </div>
  </section>
  <section class="section section-video">
    <h2>Volunteering page video title</h2>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat id
        ab tenetur qui nihil quod temporibus autem voluptatem minus! Ducimus
        consequatur eaque pariatur tenetur amet sed, necessitatibus, magni
        doloribus suscipit odit a velit placeat commodi error ipsum, odio
        consectetur.
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
          Visit the signup form page on the official Girl Guiding page to submit
          your details.
        </p>
      </div>

      <div class="signup-card">
        <div class="signup-card-title">
          <i class="bi signup-bi bi-telephone-inbound"></i>
          <h3>Await contact</h3>
        </div>

        <p>
          Someone from the Girlguiding team in your area will contact you for a
          chat, usually within seven days.
        </p>
      </div>
      <div class="signup-card">
        <div class="signup-card-title">
          <i class="bi signup-bi bi-hand-thumbs-up"></i>
          <h3>Get the right role</h3>
        </div>

        <p>
          Discuss your skills and time with the local group, helping them to
          find the right volunteer role for you.
        </p>
      </div>
    </div>
    <p>Ready?</p>
    <button class="btn-main">
      <a
        target="_blank"
        href="https://go.girlguiding.org.uk/join-us/join-as-volunteer/"
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
            My child isn’t old enough yet, can I apply anyway?
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
      headline: "Volunteer with us and help change lives!",
      subdeck:
        "Subdeck in here over 2 decks pointing to how people can register their interest below",
      imagesrc: require("../assets/images/camp.jpg"),
    };
  },
};
</script>

<style>
.volunteer-page-intro {
  padding: 10% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, rgba(196, 0, 101), rgb(78, 136, 199));
  color: #fff;
}
.volunteer-page-intro h2,
.volunteer-page-cards h2 {
  font-weight: bold;
  margin-bottom: 3rem;
}
.volunteer-page-cards {
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
  width: 100%;
}
.volunteer-card {
  margin-bottom: 1rem;
}

.volunteer-bi {
  margin-right: 1rem;
  color: #c40064;
  font-size: 1rem;
}
.volunteer-cards-container {
  margin-bottom: 2rem;
}
.volunteer-card-title {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
}
.volunteer-card-title h3 {
  font-size: 1rem;
  font-weight: bold;
}
@media all and (min-width: 768px) {
  .volunteer-page-cards {
    padding: 10% 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .volunteer-cards-container {
    display: flex;
    justify-content: space-around;
    padding: 0;
  }
  .volunteer-bi {
    font-size: 2rem;
  }
  .volunteer-card-title {
    display: flex;
    flex-direction: column;
  }
  .volunteer-card p {
    width: 85%;
  }
}
@media all and (min-width: 992px) {
  .volunteer-page-intro {
    padding: 5% 10%;
    background: linear-gradient(to right, rgba(196, 0, 101), rgb(78, 136, 199));
  }
  .volunteer-page-intro p {
    width: 80%;
  }
  .volunteer-page-cards {
    padding: 5% 10%;
  }
}

@media all and (min-width: 1200px) {
  .volunteer-page-intro {
    padding: 5% 15%;
  }
  .volunteer-page-cards {
    padding: 5% 15%;
  }
}
</style>
