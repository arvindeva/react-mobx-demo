import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';

import App from './App';
import IncomeDomainStore from './incomeDomainStore';
import IncomeUiStore from './incomeUiStore';

ReactDOM.render(
  <Provider
    incomeDomainStore={new IncomeDomainStore()}
    incomeUiStore={new IncomeUiStore()}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);
