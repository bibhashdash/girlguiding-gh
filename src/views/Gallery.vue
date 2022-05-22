<template>
  <div class="hero-secondary">
    <h1>Photo Gallery</h1>
  </div>
  <div class="gallery-grid">
    <img class="gallery-image" src="../assets/images/gallery1.jpeg" alt="" />
    <img class="gallery-image" src="../assets/images/gallery2.jpeg" alt="" />
    <img class="gallery-image" src="../assets/images/gallery5.jpeg" alt="" />
    <img class="gallery-image" src="../assets/images/gallery3.jpeg" alt="" />
    <img class="gallery-image" src="../assets/images/gallery4.jpeg" alt="" />

    <img class="gallery-image" src="../assets/images/gallery6.jpeg" alt="" />
    <img class="gallery-image" src="../assets/images/gallery7.jpeg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero-secondary {
  padding-top: 7rem;
}
.hero-secondary h1 {
  font-size: 3rem;
  font-weight: 700;
}
.gallery-grid {
  padding: 10% 5%;
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
}
.gallery-image {
  width: 100%;
  height: auto;
}
@media all and (min-width: 400px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .hero-secondary h1 {
    font-size: 3rem;
    font-weight: 700;
  }
}

@media all and (min-width: 992px) {
  .gallery-grid {
    padding: 5% 20%;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
