import { isLoggedIn } from '@/services/accountStorage';
import SessionAuth from '@/services/sessionAuth';
import Cookies from 'js-cookie';

let locale = Cookies.get('language');

export default ({ store, route, redirect, app }) => {
  guardNagivation({ store, route, redirect, app });
  updateTitlePage({ app });
}


function guardNagivation({ store, route, redirect, app }) {
  const isAuth = route.meta.reduce((requiresAuth, meta) => meta.requiresAuth || requiresAuth, false);
  
  app.router.afterEach((afterRoute) => {
    const requiresAuth = afterRoute.name == route.name ? isAuth : SessionAuth.getRequired() ;

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
        document.title = 'Fan8.club – The platform to connect idols and fan';
        break;
      case 'vi':
        document.title = 'Fan8.club – Nền tảng tiên phong kết nối idol và fan hâm mộ toàn cầu';
        break;
    }
  });
}

