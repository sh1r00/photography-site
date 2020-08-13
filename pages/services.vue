<template>
  <div>
    <v-row>
      <v-col style="margin-bottom: 2.5em; padding: 0;">
        <v-img style="height: 500px;" :src="`${baseUrl}${services.hero.path}`">
          <div class="imgOverlay" />
          <h3 class="overlayText">
            {{ services.subtitle }}
          </h3>
        </v-img>
      </v-col>
    </v-row>

    <v-container id="main" tag="main" fluid style="padding: 0 20%;">
      <v-row>
        <v-col style="margin-bottom: 2.5em;">
          <h1 class="accent--text">
            {{ services.title }}
          </h1>
          <br />
          <p>
            {{ services.content }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['services']),
    baseUrl() {
      return process.env.BASE_URL
    },
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
