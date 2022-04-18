<template>
  <div class="unit-brief">
    <h2>Who we are</h2>
    <p>{{ unitBrief }}</p>
  </div>
</template>

<script>
export default {
  props: ["unitBrief"],
};
</script>

<style>
.unit-brief {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5% 10%;
  box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
}

@media all and (min-width: 992px) {
  .unit-brief {
    padding: 5% 15%;
  }
  .unit-brief p {
    width: 80%;
  }
}
</style>
