import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider, useSelector } from 'react-redux';
import { store } from 'Redux/Store';
import { BrowserRouter } from 'react-router-dom';
import { loginUserApi, registerUserApi } from 'services/Swagger';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// const data = {
//   "name": "Adrian Cross",
//   "email": "acrossdasd@gamil.com",
//   "password": "examplepwd12345"
// };

// registerUserApi(data);


// const data = {
//   "email": "acrossdasd@gamil.com",
//   "password": "examplepwd12345"
// };

// loginUserApi(data);