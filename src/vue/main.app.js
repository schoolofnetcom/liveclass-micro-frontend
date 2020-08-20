import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Counter from './root.vue';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    render: h => h(Counter)
  }
});

export const bootstrap = [
  vueLifecycles.bootstrap
];
export const mount = [
  vueLifecycles.mount
];
export const unmount = [
  vueLifecycles.unmount
];