<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        ><img
          class="logo"
          src="../assets/images/ggGH-logo.png"
          alt="girlguiding logo"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Units
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link
                  to="/units/brownies"
                  class="dropdown-item nav-link"
                  href="#"
                  >Brownies</router-link
                >
              </li>
              <li>
                <router-link
                  to="/units/rainbows"
                  class="dropdown-item nav-link"
                  href="#"
                  >Rainbows</router-link
                >
              </li>
              <li>
                <router-link
                  to="/units/guides"
                  class="dropdown-item nav-link"
                  href="#"
                  >Guides</router-link
                >
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/leaders">Leaders</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/policies">Policies</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/gallery">Gallery</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/resources"
              >Resources</router-link
            >
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" to="/volunteer"
              >Volunteer</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item nav-cta">
            <router-link class="nav-link" to="/signup">Sign Up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
#nav {
  background: linear-gradient(to bottom, #c40064, #4e88c7);

  display: flex;
  justify-content: space-evenly;
  width: 100%;
  position: fixed;
  z-index: 5;
}

#nav a {
  font-weight: bold;
  color: #fff;
}
nav li .router-link-exact-active {
  color: #211c4f !important;
}
.nav-item a:hover {
  color: #211c4f !important;
}
.nav-cta a:hover {
  color: #fff !important;
}
.logo {
  width: 100px;
}

.dropdown-menu {
  background-color: transparent !important;
  max-width: 200px;
}
.dropdown-item:hover {
  background-color: transparent !important;
  border: 1px solid rgba(199, 199, 199, 0.452);
}

.nav-cta {
  background-color: #c40064;
  border-radius: 5px;
  width: auto;
  text-align: center;
  max-width: 200px;
}
.nav-cta:hover {
  background-color: #211c4f;
}
@media all and (min-width: 768px) {
  #nav {
    background: linear-gradient(to bottom, #c40064, #4e88c7);
    padding: 10px 5%;
  }
}
@media all and (min-width: 992px) {
  #nav {
    background: linear-gradient(to right, #c40064, #4e88c7);
    padding: 10px 5%;
  }
  .navbar-collapse {
    justify-content: flex-end;
  }
  .nav-item {
    margin-right: 10px;
  }
  .dropdown-menu {
    background-color: #c40064 !important;
  }
  .dropdown-menu li {
    margin-left: 0;
  }

  .nav-cta {
    width: 100px;
  }
}

@media all and (min-width: 1200px) {
  #nav {
    padding: 10px 10%;
  }
}
</style>
