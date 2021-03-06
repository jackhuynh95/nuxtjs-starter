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

  router: {
    middleware: ['auth'],
    mode: 'history',
    base: '/',
    linkActiveClass: 'active',
    scrollBehavior: getScrollBehaviour(),
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'components/pages/notFound/NotFoundPage.vue')
      })
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'quill/dist/quill.core.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.snow.css',
    { src: '~/styles/style.styl', lang: 'styl'},
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/veeValidate.ts',
    '~plugins/filters.ts',
    '~plugins/directives.ts',
    '~plugins/registerHooks.ts',
    { src: '~plugins/router.ts', ssr: false },
    { src: '~plugins/quill.ts', ssr: false },
    { src: '~plugins/common.ts', ssr: false },
    { src: '~/libs/autoheight/autoheight.min.js', ssr: false },
  ],

  // Auto i port components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
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
    '@nuxtjs/fontawesome',
    ['cookie-universal-nuxt'],
    ['nuxt-mq'],
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
    components: [
      'Popover', 
      'Select', 
      'Option', 
      'Tooltip', 
      'Dropdown', 
      'DropdownMenu', 
      'DropdownItem', 
      'Switch', 
      'Upload', 
      'DatePicker', 
      'TimePicker', 
      'TimeSelect', 
      'Checkbox', 
      'Radio',
      'Loading',
      'Rate',
      'Menu',
      'MenuItem',
      'Submenu',
      'Slider',
      'Input',
      'Autocomplete',
    ],
    locale: 'en',
  },

  fontawesome: {
    icons: {
      solid: [
        'faSearch',
        'faEnvelope',
        'faEye',
        'faEyeSlash',
        'faGlobe',
        'faPhoneVolume',
        'faCheckCircle',
        'faAngleLeft',
        'faAngleRight',
        'faDownload',
        'faEdit',
        'faLock',
        'faKey',
        'faMapMarkerAlt',
        'faLink',
        'faPencilAlt',
        'faUserPlus', 'faUserMinus',
        'faChevronUp', 'faChevronDown', 'faChevronLeft',
        'faVideoSlash',
        'faVideo',
        'faTrashAlt',
        'faUserFriends',
        'faMinus',
        'faPlus',
        'faAngleDoubleRight', 'faAngleDoubleLeft', 'faTimes', 'faPlayCircle', 'faTimesCircle', 'faQuestionCircle',
      ],
      brands: [
        'faTwitter',
        'faFacebook',
        'faFacebookF',
        'faInstagram',
        'faYoutube',
        'faTiktok',
        'faGithub',
        'faMedium',
        'faLinkedin',
        'faFacebookSquare',
        'faReddit',
        'faRedditSquare',
        'faTwitterSquare',
        'faTelegram',
      ],
    }
  },

  'mq': {
    breakpoints: {
      mobile: 767,
      tablet: 991,
      smallMonitor: 1200,
      largeMonitor: Infinity,
    }
  }
}

function getScrollBehaviour() {
  // scrollBehavior:
  // - only available in html5 history mode
  // - defaults to no scroll behavior
  // - return false to prevent scroll
  const scrollBehavior = function(to, from, savedPosition) {
    if (to.path === from.path) {
      return;
    }

    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      return savedPosition;
    } else {
      const position = {};

      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash;

        // specify offset of the element
        if (to.hash === '#anchor2') {
          position.offset = { y: 100 };
        }

        if (document.querySelector(to.hash)) {
          return position;
        }

        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return false;
      }
      position.x = 0;
      position.y = 0;
      return position;
    }
  };

  return scrollBehavior;
}