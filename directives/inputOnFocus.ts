// import Vue, { VNode, VNodeDirective } from 'vue';

// Vue.directive('inputOnFocus', {
//   bind: (el: HTMLElement, binding: VNodeDirective, vnode: VNode) => {
//     let $el = $(el);
//     $el.on('input', (event: Event) => {
//       let value = event.target.value;
//       let isFocused = document.activeElement === el;
//       if (isFocused) {
//         binding.value(value);
//         // $el.trigger('inputOnFocus', value);
//       }
//     });
//   },
// });
