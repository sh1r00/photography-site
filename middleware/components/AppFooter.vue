<template>
  <v-footer
    color="primary"
    class="white--text footer invisible"
  >
    <v-row>
      <v-col>
        <v-col sm="8">
          <div style="font-size: 1.25em; margin-bottom: 0.625em;">
            Contact Us
          </div>
          <br>
          <strong>
            Phone:
          </strong>
          <br>
          <v-btn
            :href="`tel:${globals.contact_info.phone}`"
            text
          >
            <h5
              style="font-family: Arial, Helvetica, sans-serif;"
              class="white--text"
            >
              {{ globals.contact_info.phone }}
            </h5>
          </v-btn>
        </v-col>
        <br>
        <v-col sm="8">
          <strong>
            Email:
          </strong>
          <br>
          <v-btn
            :href="`mailto:${globals.contact_info.email}`"
            text
          >
            <h5
              style="font-family: Arial, Helvetica, sans-serif;"
              class="white--text"
            >
              {{ globals.contact_info.email }}
            </h5>
          </v-btn>
        </v-col>
        <br>
        <v-col sm="8">
          <strong>
            Address:
          </strong>
          <br>
          <v-btn
            :href="`http://maps.google.com/?q=${globals.contact_info.address}`"
            target="blank"
            max-width="300"
            text
          >
            <h5
              style="font-family: Arial, Helvetica, sans-serif;"
              class="white--text"
            >
              {{ globals.contact_info.address }}
            </h5>
          </v-btn>
        </v-col>
      </v-col>
      <v-col>
        <v-col sm="8">
          <div style="font-size: 1.25em; margin-bottom: 0.625em;">
            Connect
          </div>
          <div style="margin-bottom: 1.625em;">
            <v-btn
              style="margin-right: 0.625em;"
              :href="globals.social.facebook"
              target="_blank"
              text
            >
              <v-icon>
                mdi-facebook
              </v-icon>
            </v-btn>
            <v-btn
              style="margin-right: 0.625em;"
              :href="globals.social.twitter"
              target="_blank"
              text
            >
              <v-icon>
                mdi-twitter
              </v-icon>
            </v-btn>
            <v-btn
              style="margin-right: 0.625em;"
              :href="globals.social.google_plus"
              target="_blank"
              text
            >
              <v-icon>
                mdi-google-plus
              </v-icon>
            </v-btn>
          </div>
          <div style="margin-bottom: 1.625em">
            &copy; {{ globals.footer.year }} {{ globals.footer.company_title }}
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-footer>  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['globals'])
  }
}
</script>

<style>
.footer {
  padding: 0 20%;
}

@media screen and (max-width: 480px) {
  .footer {
    padding: 0;
  }
}
</style>
