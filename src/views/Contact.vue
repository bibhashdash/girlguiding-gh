<template>
  <h1>Contact Us</h1>
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
    const handleSubmit = () => {
      axios
        .post("/Contact", {
          name: name.value,
          email: email.value,
          message: message.value,
        })
        .then(() => {
          router.push("/FormSuccess");
        });
    };
    return { name, email, message, handleSubmit };
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
