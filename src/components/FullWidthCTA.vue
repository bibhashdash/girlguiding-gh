<template>
  <div class="">
    <h1>{{ ctaText }}</h1>
    <router-link class="btn-main">{{ ctaButtonText }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["ctaText", "ctaButtonText"],
};
</script>

<style></style>
