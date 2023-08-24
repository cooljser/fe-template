import * as React from 'react';
import {createRoot} from 'react-dom/client';
import Routes from './routes';
import {HashRouter} from 'react-router-dom';
import './index.less';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HashRouter>
    <Routes />
  </HashRouter>
);
