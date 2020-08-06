<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    @input="navDrawerStatus(drawer)"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          {{ globals.header.site_title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ globals.header.motto }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list dense nav>
      <div>
        <div v-for="item in nav.single" :key="item.value.title">
          <v-list-item :to="item.value.content[0].value" link exact>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.value.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div v-for="item in nav.dropdown" :key="item.value.title">
          <v-menu>
            <template v-slot:activator="{ on }">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title text v-on="on">
                    {{ item.value.title }} &darr;
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list v-for="item in item.value.content" :key="item.value.title">
              <v-list-item :to="item.value.content" link exact>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.value.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div v-for="item in nav.permanent" :key="item.value.title">
          <v-list-item :to="item.value.content[0].value" link exact>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.value.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    globals: {
      type: Object,
      default: null,
    },
    toggleDrawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    ...mapGetters(['nav']),
  },
  watch: {
    toggleDrawer() {
      this.drawer = this.$props.toggleDrawer
    },
  },
  methods: {
    navDrawerStatus(value) {
      if (value === false) {
        this.$emit('close-nav-drawer')
      }
    },
  },
}
</script>
