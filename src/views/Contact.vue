<template>
  <div class="contact-page">
    <h1>Here to help</h1>
    <p>
      Drop us a line and we will aim to get back to you as soon as possible.
      Please note the inbox is monitored betweeen Monday and Friday, 9am - 5pm.
      Don't forget to include an email address so we can get back to you!
    </p>
    <form
      class="contact-form"
      name="contact"
      method="post"
      action="/FormSuccess"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" required />
      <div class="form-slot">
        <label for="">*Name:</label>
        <input name="name" type="text" class="contact-form-input" />
      </div>
      <div class="form-slot">
        <label for="">Email:</label>
        <input type="email" name="email" id="" class="contact-form-input" />
      </div>
      <div class="form-slot">
        <label for="">*Subject:</label>
        <input
          type="text"
          name="subject"
          id=""
          required
          class="contact-form-input"
        />
      </div>
      <div class="form-slot">
        <label for="">*Your message:</label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          class="contact-form-message"
        ></textarea>
      </div>

      <p>* Indicates required field</p>
      <button class="btn-main btn-contact">Submit</button>
    </form>
  </div>
</template>

//
<script></script>

<style>
.contact-page {
  /* width: 100%; */
  max-width: 500px;
  margin-top: 6rem;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-page h1 {
  font-weight: 800;
  font-size: 3rem;
}
.contact-form {
  /* border: 1px solid red; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
.form-slot {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.contact-form-input {
  height: 2.5rem;
}
.contact-form-input,
.contact-form-message {
  border: 2px solid rgb(209, 209, 209);
  border-radius: 5px;
}
.btn-contact {
  align-self: center;
  width: 100%;
}
@media all and (min-width: 1200px) {
  .contact-page {
    max-width: 700px;
  }
  .btn-contact {
    align-self: center;
    width: 60%;
  }
}
</style>
