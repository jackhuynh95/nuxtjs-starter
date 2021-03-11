import EventEmitter3, { ListenerFn } from 'eventemitter3';

export default class EventEmitter extends EventEmitter3 {
  constructor() {
    super();
  }

  public asObservable() {
    let obserable = {
      on: (type: string, cb: ListenerFn) => {
        this.on(type, cb);
      },
      once: (type: string, cb: ListenerFn) => {
        this.once(type, cb);
      },
      removeListener: (type: string, cb: ListenerFn) => {
        this.removeListener(type, cb);
      }
    };

    return obserable;
  }
}