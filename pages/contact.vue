<template>
  <div>
    <v-row>
      <v-col style="padding: 0;">
        <v-img
          style="height: 500px;"
          :src="`http://localhost/mysites/${contact.hero.path}`"
        >
          <div class="imgOverlay" />
          <h3 class="overlayText">
            {{ contact.subtitle }}
          </h3>
        </v-img>
      </v-col>
    </v-row>

    <v-container id="main" tag="main" fluid style="padding: 0 20%;">
      <v-row>
        <v-col cols="12" lg="6">
          <div style="margin-bottom: 1.625em;">
            <h1 class="accent--text">
              {{ contact.title }}
            </h1>
            <br />
            <p>
              {{ contact.content }}
            </p>
          </div>
        </v-col>
        <v-col style="padding-top: 2.5em;" cols="12" lg="6">
          <v-form id="contact-form">
            <v-text-field label="Name" placeholder="Enter your full name" />
            <v-text-field
              label="Email"
              placeholder="Enter your email address"
            />
            <v-text-field
              label="Phone (optional)"
              placeholder="Enter your phone number"
            />
            <v-textarea label="Message" placeholder="Enter a message" />
            <div
              class="alert alert-success success-message hidden success--text"
            >
              {{ contact.contact_form.success_message }}
            </div>
            <div class="alert alert-danger error-message hidden error--text">
              {{ contact.contact_form.error_message }}
            </div>
            <div style="margin-top: 1.625em;">
              <v-btn color="primary" lg>
                Submit
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['contact']),
  },
}
</script>
<style scoped>
.imgOverlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.65;
  transition: 0.5s ease;
  background-color: rgb(0, 0, 0);
  overflow: hidden;
  z-index: 2;
}
.overlayText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  z-index: 3;
}
</style>
