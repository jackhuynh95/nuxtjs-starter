import devEnv from './env/development';
import prodEnv from './env/production';

export default {
  env: process.env.NODE_ENV == "development" ? devEnv : prodEnv,
  server: {
    port: 8080, // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'example-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: '~/styles/style.styl', lang: 'styl'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/veeValidate.ts',
    '~plugins/filters.ts',
    '~plugins/router.ts',
  ],

  // Auto i port components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/http',
    'nuxt-element-ui',
    ['nuxt-i18n',
      {
        strategy: 'no_prefix',
        locales: [
          {
            code: 'en',
            file: 'en.js'
          },
          {
            code: 'vi',
            file: 'vi.js'
          },
        ],
        lazy: true,
        langDir: 'i18n/',
        defaultLocale: 'vi',
        seo: false,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'language',
          onlyOnRoot: true,  // recommended
        },
      }
    ],
    'nuxt-clipboard2',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
      ]
    },
    vendor: ['aframe'],
  },

  elementUI: {
    components: ['Select', 'Option', 'Tooltip'],
    locale: 'en',
  },
}
