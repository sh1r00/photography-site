<template>
  <v-container
    id="main"
    tag="main"
  >
    <v-row>
      <v-col
        class="text-center"
        style="margin-bottom: 2.5em;"
      >
        <h1>
          {{ page.title }}
        </h1>
        <p>
          {{ page.content }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['page'])
  }
}
</script>
