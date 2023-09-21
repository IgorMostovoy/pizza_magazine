import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'MorningBreeze';
list-style-type: none;
font-size: 18px;
font-style: normal;
font-weight: lighter;

}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Global />
    <App />
    
  </React.StrictMode>
);


