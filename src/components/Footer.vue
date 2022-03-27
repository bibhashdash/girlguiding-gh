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
        <router-link class="footer-nav-link" to="/">Contact</router-link>
        <router-link class="footer-nav-link" to="/">Sign Up</router-link>
      </div>
    </div>
    <div class="contact-info">
      <h3>Contact</h3>
      <div class="contact-info-slot">
        <i class="bi bi-telephone"></i>
        <p>+44 01234 456789</p>
      </div>
      <div class="contact-info-slot">
        <i class="bi bi-envelope"></i>
        <p>email@domain.com</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  width: 100%;
  padding: 10% 5%;
  background: linear-gradient(to bottom, #c40064, #4e88c7);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.branding {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
.branding p {
  padding: 0 10%;
  color: #fff;
  font-size: 0.8rem;
}
.navigation {
  margin-bottom: 2rem;
}
.navigation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}
.navigation h3,
.contact-info h3 {
  font-size: 1rem;
  text-align: center;
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
  align-items: center;
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
.bi {
  color: #fff;
}
@media all and (min-width: 768px) {
  footer {
    padding: 5%;
    background: linear-gradient(to bottom, #c40064, #4e88c7);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  .branding {
    width: 30%;
  }
}
</style>
