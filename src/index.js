import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from '@reduxjs/toolkit';
import myFirstReducer from './reducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = () => ({ myFirstReducer });
const store = configureStore({
  reducer: rootReducer(),
  middleware: () => [sagaMiddleware]
});
sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
