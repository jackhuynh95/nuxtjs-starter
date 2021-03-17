export default ({ store, route, redirect, app }) => {
  guardNagivation({ store, route, redirect, app });
}

function guardNagivation({ store, route, redirect, app }) {
  let requiresAuth = route.meta.reduce((requiresAuth, meta) => meta.requiresAuth || requiresAuth, false);
  store.dispatch('auth/setRequired', requiresAuth);
}