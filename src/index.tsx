import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main'
import {Provider} from 'react-redux'
import {store} from './store'
import './tailwind.css'

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Main />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );