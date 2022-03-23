<template>
  <Navbar />
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
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
}

@media all and (min-width: 992px) {
  .main {
    padding: 5% 12%;
  }
}
</style>
