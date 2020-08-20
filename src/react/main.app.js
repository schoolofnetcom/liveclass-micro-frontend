import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Tasklist from './root.component.js';

function domGetter() {
  return document.getElementById('react');
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Tasklist,
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