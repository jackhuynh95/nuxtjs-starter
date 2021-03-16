import accountStorage from '@/services/accountStorage';

export default ({ store, route, redirect, app }) => {
  guardNagivation({ store, route, redirect, app });
}

function guardNagivation({ store, route, redirect, app }) {
  let requiresAuth = route.meta.reduce((requiresAuth, meta) => meta.requiresAuth || requiresAuth, false);
  let isLoggedIn = app.$cookiz.get('account.token') ? true : false;

  if (!requiresAuth || store.state.account.profile) {
    if (!store.state.account.profile && isLoggedIn) {
      store.dispatch('account/getProfile');
    }
    
    redirect();
    return null;
  }

  let p = Promise.resolve();
  if (isLoggedIn) {
    p = store.dispatch('account/getProfile');
  }

  p.then(() => {
    if (!store.state.account.profile) {
      redirect({ name: 'login', query: { redirect_from: route.name } });
      return null;
    }
    
    redirect({});
    return null;
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
    }
  };

  return scrollBehavior;
}

