<template>
  <div class="policies-page">
    <h1>Policies</h1>
    <p>
      Follow the links below to access our various policies that underpin the
      work we do at GirlGuiding Goole and Howdenshire.
    </p>
    <div class="section section-cards policies-cards">
      <div class="policies-cards-container">
        <div class="policies-card">
          <img src="../assets/images/gdpr.png" alt="" />
          <h2>GDPR</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <p><strong>File size: 2mb</strong></p>
          <a :href="`${publicPath}GDPR-mock-document.pdf`" download>Download</a>
        </div>
        <div class="policies-card">
          <img src="../assets/images/safeguarding.png" alt="" />
          <h2>Safeguarding</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <p><strong>File size: 2mb</strong></p>
          <a :href="`${publicPath}safeguarding-mock-document.pdf`" download
            >Download</a
          >
        </div>
        <div class="policies-card">
          <img src="../assets/images/codeofconduct.png" alt="" />
          <h2>Code of conduct</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <p><strong>File size: 2mb</strong></p>
          <a :href="`${publicPath}conduct-mock-document.pdf`" download
            >Download</a
          >
        </div>
      </div>
    </div>
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
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style>
.policies-page {
  /* width: 100%; */

  margin-top: 6rem;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.policies-page h1 {
  font-weight: 800;
  font-size: 3rem;
}
.policies-page > p {
  width: 100%;
}
.policies-cards-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.policies-card {
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
  border-radius: 10px;
}
.policies-card h2 {
  margin-bottom: 1rem !important;
}
.policies-card img {
  width: 100%;
}

@media all and (min-width: 992px) {
  .policies-page > p {
    width: 100%;
    text-align: center;
  }
  .policies-cards {
    padding: 0;
  }
  .policies-cards-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    /* padding: 0 10%; */
  }
  .policies-card {
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 0;
    width: 100%;
    box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
  }
  .policies-card img {
    max-height: 135px;
    width: auto;
    align-self: center;
  }
}
@media all and (min-width: 1200px) {
  .policies-cards {
    padding: 10%;
  }
  .policies-cards-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    /* padding: 0 10%; */
  }
}
</style>
