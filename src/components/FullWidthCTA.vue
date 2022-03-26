<template>
  <div class="fullWidthCTA-container">
    <h1 class="full-width-cta-text">{{ fullWidthCTAtext }}</h1>
    <router-link to="/signup" class="btn-main">{{
      fullWidthCTAButtonText
    }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["fullWidthCTAtext", "fullWidthCTAButtonText"],
};
</script>

<style>
.fullWidthCTA-container {
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.full-width-cta-text {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 2px #000000;
  text-align: center;
}
.fullWidthCTA-container h1,
.fullWidthCTA-container .btn-main {
  margin: 2rem 0;
}

@media all and (min-width: 768px) {
  .fullWidthCTA-container {
    padding: 5% 10%;
  }
}
@media all and (min-width: 1200px) {
  .fullWidthCTA-container {
    padding: 5% 20%;
  }
}
</style>
