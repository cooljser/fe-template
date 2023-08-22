import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './routes';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById('root')
);
