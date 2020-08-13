<template>
  <div>
    <v-row id="main" tag="main">
      <v-img style="height: 500px;" :src="`${baseUrl}${home.hero.path}`">
        <div class="imgOverlay" />
        <div class="overlayText">
          <h2 style="font-size: 1.65em;" class="secondary--text">
            {{ home.headline }}
          </h2>
          <p style="font-size: 2.25em;">
            {{ home.subheadline }}
          </p>
        </div>
      </v-img>
    </v-row>

    <v-container id="main" tag="main" fluid style="padding: 0 15%;">
      <v-row
        v-if="home.blurbs"
        id="blurbs"
        tag="section"
        style="padding-top: 5em;"
      >
        <v-col
          v-for="(item, index) in home.blurbs"
          :key="index"
          cols="12"
          lg="4"
          class="text-center pa-4"
        >
          <div style="margin-bottom: 1.25em;">
            <v-img
              class="img-circle center-block"
              :src="`${baseUrl}${item.value.image.path}`"
              height="250px"
              width="250px"
            />
          </div>
          <p style="font-size: 1.625em; margin: 0 0 1.25em 0;">
            {{ item.value.title }}
          </p>
          <span
            class="accent--text text-center pa-3"
            style="margin-bottom: 1.25em;"
          >
            {{ item.value.content }}
          </span>
        </v-col>
      </v-row>
      <div class="clearfix" />
      <div class="clearfix" />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['home']),
    baseUrl() {
      return process.env.BASE_URL
    },
  },
}
</script>

<style scoped>
.img-circle {
  border-radius: 50%;
}
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
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
