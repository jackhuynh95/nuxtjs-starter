import accountStorage from '@/services/accountStorage';
import Cookies from 'js-cookie';

let locale = Cookies.get('language');
let router: any = '';
let store: any = '';
let initStorePromise: any = '';

export default ({ app }) => {
  initStorePromise = Promise.resolve();
  router = app.router;
  store = app.store;

  guardNagivation();
  updateTitlePage();
}


function guardNagivation() {
  router.beforeEach((to, from, next) => {
    initStorePromise
      .then(() => {
        let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        
        if (!requiresAuth || store.state.account.profile) {
          if (!store.state.account.profile && accountStorage.isLoggedIn()) {
            store.dispatch('account/getProfile');
          }
          
          next();
          return null;
        }

        let p = Promise.resolve();
        if (accountStorage.isLoggedIn()) {
          p = store.dispatch('account/getProfile');
        }

        p.then(() => {
          if (!store.state.account.profile) {
            next({ name: 'login', query: { redirect_from: to.name } });
            return null;
          }
          
          next({});
          return null;
        });
      })
      .catch(next);
  });
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
      const position: any = {};

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
      // return new Promise(resolve => {
      //   // check if any matched route config has meta that requires scrolling to top
      //   if (to.matched.some(m => m.meta.scrollToTop)) {
      //     // coords will be used if no selector is provided,
      //     // or if the selector didn't match any element.
      //     position.x = 0;
      //     position.y = 0;
      //   }

      //   resolve(position);
      //   // // wait for the out transition to complete (if necessary)
      //   // this.app.$root.$once('triggerScroll', () => {
      //   //   // if the resolved position is falsy or an empty object,
      //   //   // will retain current scroll position.
      //   //   resolve(position);
      //   // });
      // });
    }
  };

  return scrollBehavior;
}

function updateTitlePage() {
  // check change state and set title for page

  router.afterEach(route => {
    switch (locale) {
      case 'en':
        document.title = 'Fan8.club – The platform to connect idols and fan';
        break;
      case 'vi':
        document.title = 'Fan8.club – Nền tảng tiên phong kết nối idol và fan hâm mộ toàn cầu';
        break;
    }

    // let metaDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    // if (metaDescription) {
    //   metaDescription.content = route.meta.description;
    // }
    
    // let metaImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement;
    // if (metaImage) {
    //   metaImage.content = route.meta.image;
    // }
  });
}

