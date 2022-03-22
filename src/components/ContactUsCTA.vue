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
}
.contact-cta p {
  font-size: 24px;
  font-weight: 500;
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
</style>
