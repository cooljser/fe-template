import * as React from 'react';
import {createRoot} from 'react-dom/client';
import Routes from './routes';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';
import stores from './stores';
import './i18n';
import './index.less';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  return (
    <HashRouter>
      <Provider {...stores}>
        <Routes />
      </Provider>
    </HashRouter>
  );
}

root.render(<App />);
