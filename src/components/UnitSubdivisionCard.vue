<template>
  <div class="unit-subdivision-card">
    <img src="../assets/images/childrenPlaying.jpg" alt="" />
    <div class="unit-subdivision-content">
      <div class="unit-location">
        <p><strong>Location</strong></p>
        <p>{{ location }}</p>
      </div>
      <div class="unit-age-range">
        <p><strong>Age Range</strong></p>
        <p>{{ ageRange }}</p>
      </div>

      <div class="unit-schedule">
        <p><strong>Schedule</strong></p>
        <p>{{ schedule }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["location", "ageRange", "schedule"],
};
</script>

<style>
.unit-subdivision-card {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 2rem;
  width: 90%;
  box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
  border-radius: 10px;
  padding: 1%;
}
.unit-subdivision-card img {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
  /* align-self: center; */
}
/* .unit-subdivision-content {
  align-self: flex-start;
} */

@media all and (min-width: 576px) {
  .unit-subdivision-card img {
    width: 100%;
    height: auto;
  }
}
</style>
