import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.component';

import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
