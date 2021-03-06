import React from 'react';
import ReactDOM from 'react-dom';
import l from '@loadable/component';
import './main.scss';

const App = l(() => import('./App'));

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement,
);
