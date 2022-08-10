import React from 'react';
import ReactDOM from 'react-dom/client';
import BaseRouter from './router';
import './index.less';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BaseRouter />
  </React.StrictMode>
);
