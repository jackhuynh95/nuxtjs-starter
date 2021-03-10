declare module "enquire.js" {
  interface Enquire {
    register(mediaQuery: string, handler: MediaQueryHandler, shouldDegrade?: boolean): Enquire
    unregister(mediaQuery: string, handler?: MediaQueryHandler): Enquire
  }

  interface MediaQueryHandler {
    match?(): void
    unmatch?(): void
    setup?(): void
    destroy?(): void
    deferSetup?: boolean
  }

  var enquire: Enquire;
  export = enquire;
}
