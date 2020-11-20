import React from 'react';
import ReactDOM from 'react-dom';
import ProviderMain from './context/main';
import App from './routes';
import './css/index.css'
ReactDOM.render(
    <ProviderMain>
      <App />
    </ProviderMain>,
  document.getElementById('root')
);

