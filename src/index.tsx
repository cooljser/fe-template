import * as React from 'react';
import {createRoot} from 'react-dom/client';
import Routes from './routes';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';
import './index.less';
import stores from './stores';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HashRouter>
    <Provider {...stores}>
      <Routes />
    </Provider>
  </HashRouter>
);
