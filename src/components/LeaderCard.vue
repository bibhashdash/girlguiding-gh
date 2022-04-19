<template>
  <div class="leader-card">
    <img class="leaderPic" :src="imagesrc" alt="" />
    <div class="leader-card-title">
      <h3>{{ leaderName }}</h3>
      <!-- <p>{{ leaderUnits }}</p> -->
    </div>
    <div class="leader-card-bio hidden">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis
      </p>
      <span>❌</span>
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
.hidden {
  display: none;
}
.leader-card img {
  width: 100%;

  border-radius: 10px;
  /* align-self: center; */
}
.leader-card-title,
.leader-card-bio {
  width: 90%;
  position: absolute;
  z-index: 3;
  bottom: 1%;
  left: 1%;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.681);
  padding: 2%;
  cursor: pointer;
}

.leader-card p {
  font-size: 0.8rem;
}
@media all and (min-width: 576px) {
}
</style>
