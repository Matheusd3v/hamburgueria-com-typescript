import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import Providers from './Providers';

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Providers>
        <GlobalStyle/>
        <App />
      </Providers>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

