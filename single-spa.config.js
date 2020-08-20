import { registerApplication, start } from 'single-spa';

const setRouter = (prefix) => ((location) => location.pathname.startsWith(`${prefix}`));

// localhost:XXXXX/
registerApplication(
  'main',
  () => import('./src/main/main.app.js'),
  setRouter('/')
);

// localhost:XXXXX/vue
registerApplication(
  'vue',
  () => import('./src/vue/main.app.js'),
  setRouter('/vue')
);

// localhost:XXXXX/react
registerApplication(
  'react',
  () => import('./src/react/main.app.js'),
  setRouter('/react')
);

start();


/**
 *           MAIN
 *       VUE    REACT
 *
 */