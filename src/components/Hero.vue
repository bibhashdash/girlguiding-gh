<template>
  <div class="hero">
    <div class="content">
      <h1>{{ headline }}</h1>
      <p>
        {{ subdeck }}
      </p>
      <form
        name="register-interest"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="register-interest" />
        <input
          class="hero-form-input"
          type="email"
          name="email"
          id=""
          placeholder="Enter your email"
        />
        <button class="btn-hero">Submit</button>
      </form>
    </div>
    <div class="hero-image-container">
      <img
        class="hero-image"
        src="../assets/images/hero-placeholder.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["headline", "subdeck", "imagesrc"],
};
</script>

<style>
.hero {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 5% 10px;
}
.content {
  display: flex;
  flex-direction: column;
}
.content h1 {
  font-size: 54px;
  font-weight: 700;
}
.hero-form-input {
  height: 36px;
  width: 220px;
  border: 1.5px solid rgb(204, 204, 204);
}
.btn-hero {
  width: 110px;
  height: 36px;
  background-color: #c40064;
  color: #fff;
  border: none;
}
.hero-image {
  border: 1px solid red;
  width: 100%;
}
</style>
