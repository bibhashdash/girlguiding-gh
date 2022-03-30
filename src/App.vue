<template>
  <Navbar />

  <router-view />

  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Footer },
};
</script>
<style>
#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #211c4f;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
}

.btn-main {
  height: 36px;
  background-color: #c40064;
  color: #fff;
  border: none;
  border-radius: 0 8px 8px 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-main:hover {
  color: #fff;
  background-color: #211c4f !important;
}
.btn-main a {
  text-decoration: none;
  color: #fff;
}
h2 {
  text-decoration: underline;
}
</style>
