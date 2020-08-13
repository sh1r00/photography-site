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
      <v-col style="margin-bottom: 2.5em;" class="hidden-sm-and-down pa-0">
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
                :src="`${baseUrl}${selectedImg.path}`"
              >
                <v-btn
                  class="imgShare-btn"
                  @click="showImgShare = !showImgShare"
                >
                  <v-icon>
                    mdi-share
                  </v-icon>
                </v-btn>
                <div
                  v-if="showImgShare"
                  class="imgShare-overlay"
                  @click="showImgShare = !showImgShare"
                />
                <v-col
                  v-if="showImgShare"
                  class="imgShare-menu"
                  cols="12"
                  width="100px"
                >
                  <v-list v-for="item in shareItems" :key="item.title">
                    <v-list-item :href="`https://${item.link}`" link exact>
                      <v-list-item-content>
                        <shareNetwork
                          :network="item.network"
                          :url="`${networkUrl}/work/${item.title}`"
                          :title="globals.header.site_title"
                          :descrition="globals.site_description"
                          :quote="item.seo_description"
                          :hashtags="work.social_tags"
                        >
                          <v-list-item-title>
                            {{ item.title }} {{ item.icon }}
                          </v-list-item-title>
                        </shareNetwork>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <h3 class="title">
                  {{ selectedImg.meta.title }}
                </h3>
              </v-img>
            </v-row>
          </v-sheet>
        </v-expand-transition>
      </v-col>
      <v-col style="margin-bottom: 2.5em;" class="hidden-md-and-up pa-0">
        <v-expand-transition>
          <v-sheet
            v-if="selectedImg != null"
            color="grey lighten-4"
            height="500"
            tile
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-img :src="`${baseUrl}${selectedImg.path}`">
                <v-btn
                  class="imgShare-btn"
                  @click="showImgShare = !showImgShare"
                >
                  <v-icon>
                    mdi-share
                  </v-icon>
                </v-btn>
                <div
                  v-if="showImgShare"
                  class="imgShare-overlay"
                  @click="showImgShare = !showImgShare"
                />
                <v-col
                  v-if="showImgShare"
                  class="imgShare-menu"
                  cols="12"
                  width="100px"
                >
                  <v-list v-for="item in shareItems" :key="item.title">
                    <v-list-item exact>
                      <v-list-item-content>
                        <shareNetwork
                          :network="item.network"
                          :url="`${networkUrl}/work/${item.title}`"
                          :title="globals.header.site_title"
                          :descrition="globals.header.site_description"
                          :quote="work.seo_description"
                          :hashtags="work.social_tags"
                        >
                          <v-list-item-title>
                            {{ item.title }} {{ item.icon }}
                          </v-list-item-title>
                        </shareNetwork>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-img>
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
              <v-img :src="`${baseUrl}${item.path}`" />
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
      networkUrl: 'facebook.com',
      selectedImg: null,
      showImgShare: false,
      shareItems: [
        {
          title: 'Share on Facebook',
          icon: 'icon',
          network: 'facebook',
        },
        {
          title: 'Tweet it',
          icon: 'icon',
          network: 'twitter',
        },
        {
          title: 'Pin it to Pintrest',
          icon: 'icon',
          network: 'pinterest',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['work', 'globals']),
    baseUrl() {
      return process.env.BASE_URL
    },
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

<style scoped>
.imgShare-btn {
  width: 65px;
  height: 45px;
  margin-left: calc(100% - 65px);
}
.imgShare-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.4;
  z-index: 2;
}
.imgShare-menu {
  position: absolute;
  max-width: 250px;
  top: 0;
  right: 0;
  margin: 1.5em 25px 0 0;
  opacity: 1;
  z-index: 3;
}
</style>
