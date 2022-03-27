<template>
  <div class="contact-cta">
    <p>For any questions or to find out more about our activities</p>
    <button class="btn-main">Contact Us</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
      to bottom,
      rgba(196, 0, 101, 0.733),
      rgb(78, 136, 199, 0.733)
    ),
    url("../assets/images/childrensilhouette.jpg");
  padding: 20% 5%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.contact-cta p {
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-shadow: 2px 2px #000000;
}
.btn-main {
  width: 250px;
  height: 55px;
  background-color: #c40064;
  color: #fff;
  border: none;
  border-radius: 8px;
}
.btn-main:hover {
  background-color: #da2c85;
}

@media all and (min-width: 768px) {
  .contact-cta {
    padding: 10%;
  }
}
</style>
