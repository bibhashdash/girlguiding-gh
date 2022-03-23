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
    <input v-model="name" type="text" />
    <label for="">Email:</label>
    <input v-model="email" type="email" name="" id="" />
    <label for="">Your message:</label>
    <textarea v-model="message" name="" id="" cols="30" rows="10"></textarea>
    <button>Submit</button>
  </form>
  <!-- <p>{{ name }}</p>
  <p>{{ email }}</p>
  <p>{{ message }}</p> -->
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const router = useRouter();
    const data = {
      form: {
        name: name.value,
        email: email.value,
        message: message.value,
      },
    };
    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    };
    const handleSubmit = () => {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios
        .post(
          "/",
          encode({
            "form-name": "contact",
            ...form,
          }),
          axiosConfig
        )
        .then(() => {
          router.push("/FormSuccess");
        });
    };
    return { name, email, message, handleSubmit, data };
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
