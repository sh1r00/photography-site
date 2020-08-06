<template>
  <div>
    <v-row class="pa-8">
      <v-btn to="/works" height="50" width="80" text>
        <v-icon>
          mdi-arrow-left
        </v-icon>
      </v-btn>
      <v-spacer />
      <h1 class="accent--text">
        {{ work.title }}
      </h1>
    </v-row>
    <v-row style="margin-bottom: 2.5em;">
      <v-col style="margin-bottom: 2.5em;" class="hidden-sm-and-down">
        <v-expand-transition>
          <v-sheet
            v-if="selectedImg != null"
            color="grey lighten-4"
            height="500"
            tile
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-img
                max-height="500"
                max-width="750"
                :src="`http://localhost/mysites/${selectedImg.path}`"
              />
              <h3 class="title">
                {{ selectedImg.meta.title }}
              </h3>
            </v-row>
          </v-sheet>
        </v-expand-transition>
      </v-col>
      <v-col style="margin-bottom: 2.5em;" class="hidden-md-and-up">
        <v-expand-transition>
          <v-sheet
            v-if="selectedImg != null"
            color="grey lighten-4"
            height="500"
            tile
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-img :src="`http://localhost/mysites/${selectedImg.path}`" />
              <h3 class="title">
                {{ selectedImg.meta.title }}
              </h3>
            </v-row>
          </v-sheet>
        </v-expand-transition>
      </v-col>
      <v-col style="margin-bottom: 1.625e;">
        <v-slide-group class="pa-4" show-arrows>
          <v-slide-item
            v-for="(item, index) in work.gallery"
            :key="index"
            v-slot:default="{ active, toggle }"
          >
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              height="100"
              width="150"
              @click="toggle, selectImg(item)"
            >
              <v-img :src="`http://localhost/mysites/${item.path}`" />
              <v-row class="fill-height" align="center" justify="center">
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  />
                </v-scale-transition>
              </v-row>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      selectedImg: null,
    }
  },
  computed: {
    ...mapGetters(['work']),
  },
  created() {
    this.$store.dispatch('getWorks', 'works')
  },
  mounted() {
    this.$store.dispatch('filterWorks', this.$route.params.title)
  },
  methods: {
    selectImg(params) {
      this.selectedImg = params
    },
  },
}
</script>
