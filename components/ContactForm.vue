<template>
  <div class="container">
    <h2 class="title">
      Want to work with us?
    </h2>
    <div class="row">
      <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
        <fg-input
          v-model="form.firstName"
          class="input-lg"
          placeholder="First Name..."
          addon-left-icon="now-ui-icons users_circle-08"
        />
        <fg-input
          v-model="form.email"
          class="input-lg"
          placeholder="Email Here..."
          addon-left-icon="now-ui-icons ui-1_email-85"
        />
        <div class="textarea-container">
          <textarea
            v-model="form.message"
            class="form-control"
            name="name"
            rows="4"
            cols="80"
            placeholder="Type a message..."
          />
        </div>
        <div class="send-button">
          <n-button type="primary" round block size="lg">
            Send Message
          </n-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script/>
<style scoped>
</style>
