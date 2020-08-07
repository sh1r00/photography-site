import Request from '~/common/requests.js'

export const state = () => ({
  globals: {
    header: {
      site_description: null,
      site_title: null,
      motto: null,
      favicon: {
        path: '',
      },
      logo: {
        path: '',
      },
    },
    contact_info: {
      phone: null,
      email: null,
      address: {
        street: null,
        city: null,
      },
    },
    social: {
      facebook: null,
      twitter: null,
      google_plus: null,
    },
    footer: {
      year: null,
      company_title: null,
    },
  },
  nav: {
    single: [],
    dropdown: [],
    permanent: [],
  },
  home: {
    headline: null,
    subheadline: null,
    hero: {
      path: '',
    },
    blurb: {
      title: null,
      content: null,
      image: {
        path: '',
      },
    },
    blurbs: [],
  },
  services: {
    title: null,
    hero: {
      path: '',
    },
    content: null,
    seo_description: null,
  },
  work: {
    title: null,
    hero: {
      path: '',
    },
    gallery: [],
    tags: [],
  },
  works: [],
  about: {
    title: null,
    hero: {
      path: '',
    },
    content: null,
    seo_description: null,
  },
  contact: {
    title: null,
    hero: {
      path: '',
    },
    content: null,
    contact_form: {
      success_message: null,
      error_message: null,
    },
    seo_description: null,
  },
})

export const getters = {
  globals(state) {
    return state.globals
  },
  nav(state) {
    return state.nav
  },
  home(state) {
    return state.home
  },
  about(state) {
    return state.about
  },
  work(state) {
    return state.work
  },
  works(state) {
    return state.works
  },
  services(state) {
    return state.services
  },
  contact(state) {
    return state.contact
  },
}

export const mutations = {
  SET_GLOBALS(state, payload) {
    state.globals = payload
  },
  SET_NAV(state, payload) {
    const nav = {
      single: [],
      dropdown: [],
      permanent: [],
    }

    for (let x = 0; x < payload.length; x++) {
      const navType = payload[x].value.type

      if (navType === 'single') {
        nav.single.push(payload[x])
      } else if (navType === 'dropdown') {
        nav.dropdown.push(payload[x])
      } else if (navType === 'permanent') {
        nav.permanent.push(payload[x])
      }
    }
    state.nav = nav
  },
  SET_GLOBAL_HEADER(state, payload) {
    state.globals.header = payload
  },
  SET_PAGES(state, payload) {
    state.home = payload.home
    state.about = payload.about
    state.contact = payload.contact
    state.services = payload.services
  },
  SET_WORKS(state, payload) {
    state.works = payload
  },
  SET_WORK(state, payload) {
    state.work.title = payload.value.title
    state.work.hero = payload.value.hero
    state.work.gallery = payload.value.gallery
  },
}

export const actions = {
  getGlobals(context, params) {
    Request.getObjectsBy(params).then((res) => {
      context.commit('SET_GLOBALS', res)
      // Helper.arrayCleaner.apply(null, res.nav)
    })
  },
  getNav(context, params) {
    Request.getObjectsBy(params).then((res) => {
      context.commit('SET_NAV', res)
    })
  },
  getPages(context, params) {
    Request.getObjectsBy(params)
      .then((res) => {
        context.commit('SET_PAGES', res)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  getWorks(context, params) {
    Request.getObjectsBy(params).then((res) => {
      context.commit('SET_WORKS', res)
    })
  },
  filterWorks(context, params) {
    const works = context.state.works
    for (let x = 0; x < works.length; x++) {
      if (works[x].value.title === params) {
        const filteredWork = works[x]
        context.commit('SET_WORK', filteredWork)
      }
    }
  },
}
