import { isLoggedIn } from '@/services/accountStorage';
import Cookies from 'js-cookie';

let locale = Cookies.get('language');

export default ({ store, route, redirect, app }) => {
  guardNagivation({ store, route, redirect, app });
  updateTitlePage({ app });
}


function guardNagivation({ store, route, redirect, app }) {
  app.router.afterEach((afterRoute) => {
    const requiresAuth = store.state.auth.required;

    if (!requiresAuth || store.state.account.profile) {
      if (!store.state.account.profile && isLoggedIn()) {
        store.dispatch('account/getProfile');
      }
      
      return;
    }
    
    let p = Promise.resolve();
    
    if (isLoggedIn()) {
      p = store.dispatch('account/getProfile');
    }

    p.then(() => {
      if (!store.state.account.profile) {
        return redirect({ name: 'login', query: { redirect_from: afterRoute.name } });
      }
      
      return;
    });
  });
}

function updateTitlePage({ app }) {
  // check change state and set title for page
  app.router.afterEach(route => {
    switch (locale) {
      case 'en':
        document.title = 'NuxtJS – The Intuitive Vue Framework';
        break;
      case 'vi':
        document.title = 'NuxtJS – The Intuitive Vue Framework';
        break;
    }
  });
}

