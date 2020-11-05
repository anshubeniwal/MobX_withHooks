import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/mobxStore'
import { Provider } from 'mobx-react';
import rootStore from './store/RootStore';
import { BrowserRouter } from 'react-router-dom';

export const StoreContext = React.createContext();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider login={rootStore.loginStore} ApiData={rootStore.ApiStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
