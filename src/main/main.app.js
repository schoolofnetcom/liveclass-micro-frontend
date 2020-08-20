import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Main from './main.component.js';

function domGetter() {
  return document.getElementById('main');
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Main,
  domGetter
});

export const bootstrap = [
  reactLifecycles.bootstrap
];
export const mount = [
  reactLifecycles.mount
];
export const unmount = [
  reactLifecycles.unmount
];