<template>
  <div class="leader-card">
    <img class="leaderPic" :src="imagesrc" alt="" />
    <div class="leader-card-content">
      <h3>{{ leaderName }}</h3>
      <p>{{ leaderUnits }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["leaderName", "leaderUnits", "imagesrc"],
};
</script>

<style>
.leader-card {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-bottom: 2rem;
  width: fit-content;

  box-shadow: 2px 2px 2px 1px rgb(231, 231, 231);
  border-radius: 10px;
  padding: 1%;
  position: relative;
}
.leader-card img {
  width: 100%;

  border-radius: 10px;
  /* align-self: center; */
}
.leader-card-content {
  width: 90%;
  position: absolute;
  bottom: 1%;
  left: 1%;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.681);
  padding: 0 2%;
}

.leader-card p {
  font-size: 0.8rem;
}
@media all and (min-width: 576px) {
}
</style>
