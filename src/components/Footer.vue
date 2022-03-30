<template>
  <footer>
    <div class="branding">
      <router-link class="navbar-brand" to="/"
        ><img
          class="logo"
          src="../assets/images/ggGH-logo.png"
          alt="girlguiding logo"
      /></router-link>
      <p>
        Information about charity and it’s place within the charity commission
        website and where the number is and a link to the CC profile page.
      </p>
    </div>
    <div class="navigation">
      <h3>Navigation</h3>
      <div class="navigation-grid">
        <router-link class="footer-nav-link" to="/">Home</router-link>
        <router-link class="footer-nav-link" to="/policies"
          >Policies</router-link
        >
        <router-link class="footer-nav-link" to="/gallery">Gallery</router-link>
        <router-link class="footer-nav-link" to="/resources"
          >Resources</router-link
        >
        <router-link class="footer-nav-link" to="/volunteer"
          >Volunteer</router-link
        >
        <router-link class="footer-nav-link" to="/units/rainbows"
          >Rainbows</router-link
        >
        <router-link class="footer-nav-link" to="/units/brownies"
          >Brownies</router-link
        >
        <router-link class="footer-nav-link" to="/units/guides"
          >Guides</router-link
        >
        <router-link class="footer-nav-link" to="/contact">Contact</router-link>
        <router-link class="footer-nav-link" to="/signup">Sign Up</router-link>
      </div>
    </div>
    <div class="contact-info">
      <h3>Contact</h3>
      <div class="contact-info-slot">
        <i class="bi footer-bi bi-telephone"></i>
        <p>+44 01234 456789</p>
      </div>
      <div class="contact-info-slot">
        <i class="bi footer-bi bi-envelope"></i>
        <p>email@domain.com</p>
      </div>
    </div>
    <div class="byline">
      <p>Copyright 2022 Girlguiding Goole and Howdenshire</p>
      <p>
        Website Design by
        <a href="https://www.nineblockmedia.com/">Nine Block Media</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  width: 100%;
  padding: 5%;
  background: linear-gradient(to bottom, #c40064, #4e88c7);
  display: grid;
  grid-template-rows: 30% 30% 20% 10%;
  justify-items: center;
  gap: 1rem;
}
.branding {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 2rem; */
  width: 60%;
}
.branding p {
  /* padding: 0 10%; */
  color: #fff;
  font-size: 0.8rem;
}
.navigation {
  margin-bottom: 2rem;
  width: 50%;
}
.navigation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}
.navigation-grid a:hover {
  color: #211c4f !important;
}
.navigation h3,
.contact-info h3 {
  font-size: 1rem;
  text-align: start;
  color: #fff;
}
.footer-nav-link {
  text-decoration: none;
  color: #fff !important;
  font-size: 0.8rem;
}
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
}
.contact-info-slot {
  display: grid;
  grid-template-columns: 10% 90%;
}
.contact-info-slot p {
  color: #fff;
  margin-left: 1rem;
  font-size: 0.8rem;
}
.footer-bi {
  color: #fff;
}
.byline p {
  font-size: 0.8rem;
  color: #fff;
}
.byline a {
  text-decoration: underline;
  color: #fff;
}
@media all and (min-width: 768px) {
  footer {
    padding: 5%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: none;
    gap: 1rem;
    justify-items: center;
    align-items: flex-start;
  }
  .branding,
  .navigation,
  .byline {
    width: 70%;
  }
  .contact-info {
    width: auto;
  }
}
@media all and (min-width: 1200px) {
  footer {
    padding: 2% 10%;
  }
}
@media all and (min-width: 1400px) {
  footer {
    padding: 2% 15%;
  }
}
</style>
