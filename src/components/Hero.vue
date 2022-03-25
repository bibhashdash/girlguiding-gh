<template>
  <div class="hero">
    <div class="hero-content">
      <h1>{{ headline }}</h1>
      <p>
        {{ subdeck }}
      </p>
      <form
        name="register-interest"
        action="/FormSuccess"
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
      <img class="hero-image" :src="imagesrc" alt="" />
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
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
}
.hero-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-content h1 {
  font-size: 54px;
  font-weight: 700;
  margin-bottom: 2rem;
}
.hero-content P {
  margin-bottom: 2rem;
}
form {
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  margin-bottom: 2rem;
}
.hero-form-input {
  height: 36px;
  font-size: 12px;
  border: 1.5px solid rgb(204, 204, 204);
  border-radius: 8px 0 0 8px;
}
.btn-hero {
  height: 36px;
  background-color: #c40064;
  color: #fff;
  border: none;
  border-radius: 0 8px 8px 0;
}
.hero-image {
  width: 100%;
}

@media all and (min-width: 768px) {
  .hero {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    width: 100%;
    height: auto;
  }
  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .hero-content h1 {
    margin-bottom: 1rem;
  }
  .hero-content P {
    margin-bottom: 1rem;
  }
  form {
    margin-bottom: 1rem;
    width: 90%;
  }
}

@media all and (min-width: 992px) {
  .hero {
    padding: 5% 12%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    height: auto;
  }
  .hero-content {
    display: flex;
    flex-direction: column;
  }
  .hero-content h1 {
    margin-bottom: 1rem;
  }
  .hero-content P {
    margin-bottom: 1rem;
  }
  form {
    margin-bottom: 1rem;
  }
}

@media all and (min-width: 1400px) {
  .hero {
    width: 90%;
    height: auto;
  }
  .hero-content {
    width: 80%;
  }
}
</style>
