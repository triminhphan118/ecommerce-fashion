import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import './assets/boxicon/css/boxicons.min.css';
import './styles/index.scss';

import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
