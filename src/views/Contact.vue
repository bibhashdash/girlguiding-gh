<template>
  <h1>Contact Dinesh</h1>
  <form
    class="contact-form"
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="contact" />
    <label for="">Name:</label>
    <input v-model="form.name" name="name" type="text" />
    <label for="">Email:</label>
    <input v-model="form.email" type="email" name="email" id="" />
    <label for="">Your message:</label>
    <textarea
      v-model="form.message"
      name="message"
      id=""
      cols="30"
      rows="10"
    ></textarea>
    <button>Submit</button>
  </form>
  <!-- <p>{{ name }}</p>
  <p>{{ email }}</p>
  <p>{{ message }}</p> -->
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      message: "",
    },
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) =>
            `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios
        .post(
          "/",
          this.encode({
            "form-name": "contact",
            ...this.form,
          }),
          axiosConfig
        )
        .then(() => {
          console.log("successfully sent");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.contact-form {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
}
</style>
