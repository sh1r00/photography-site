<template>
  <v-toolbar flat color="primary" class="pa-0" dense>
    <v-btn width="80px" height="40px" text to="/">
      <v-img
        width="80px"
        height="40px"
        :src="`http://localhost/mysites/${logo}`"
      />
    </v-btn>
    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down pa-0">
      <div v-for="item in nav.single" :key="item.value.title">
        <v-btn
          text
          :to="item.value.content[0].value"
          link
          exact
          class="secondary--text"
        >
          {{ item.value.title }}
        </v-btn>
      </div>
      <div v-for="item in nav.dropdown" :key="item.value.title">
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn text class="secondary--text" v-on="on">
              {{ item.value.title }} &darr;
            </v-btn>
          </template>
          <v-list
            v-for="dropItem in item.value.content"
            :key="dropItem.value.title"
          >
            <v-list-item :to="`/page/${dropItem.value.title}`" link exact>
              <v-list-item-content>
                <v-list-item-title class="secondary--text">
                  {{ dropItem.value.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-for="item in nav.permanent" :key="item.value.title">
        <v-btn
          text
          :to="item.value.content[0].value"
          class="secondary--text"
          link
          exact
        >
          {{ item.value.title }}
        </v-btn>
      </div>
    </v-toolbar-items>
    <v-app-bar-nav-icon
      color="secondary"
      class="hidden-md-and-up"
      @click="toggleNavDrawer"
    />
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    logo: {
      type: String,
      default: 'null',
    },
  },
  computed: {
    ...mapGetters(['nav']),
  },
  methods: {
    toggleNavDrawer() {
      this.$emit('toggle-nav-drawer')
    },
  },
}
</script>
