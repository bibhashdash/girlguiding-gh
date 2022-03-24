<template>
  <h1>Contact Me</h1>
  <form
    class="contact-form"
    name="contact"
    method="POST"
    data-netlify="true"
    action="/"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="contact" />
    <label for="">Name:</label>
    <input v-model="form.name" type="text" />
    <label for="">Email:</label>
    <input v-model="form.email" type="email" name="" id="" />
    <label for="">Your message:</label>
    <textarea
      v-model="form.message"
      name=""
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
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
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
      fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: this.encode({
          "form-name": "contact",
          ...this.form,
        }),
      })
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
