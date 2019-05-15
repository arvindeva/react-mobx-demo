import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';

import App from './App';
import IncomeDomainStore from './incomeDomainStore';

ReactDOM.render(
  <Provider incomeDomainStore={new IncomeDomainStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
