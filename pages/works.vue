<template>
  <v-container id="main" tag="main" style="padding-top: 2.5em;">
    <div v-if="works">
      <v-row>
        <v-col
          v-for="(item, index) in works"
          :key="index"
          style="margin-bottom: 3.8em;"
        >
          <router-link :to="`/work/${item.value.title}`" class="images">
            <h3
              class="accent--text"
              style="margin-bottom: 1.625em; font-size: 1.65em;"
            >
              {{ item.value.title }}
            </h3>
            <v-img
              max-width="250px"
              height="250px"
              :src="`http://localhost/mysites/${item.value.hero.path}`"
            />
          </router-link>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['works']),
  },
  mounted() {
    this.$store.dispatch('getWorks', 'works')
  },
}
</script>

<style scoped>
.images {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
</style>
