import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { scrollingMonth } from './actions';
import reducer from './reducers';
import App from './routes/App.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const initialState = {
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  hero:'',
  home:'',
  photoContainer: '',
  currentPhoto: '',
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, initialState, composeEnhancers)
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("app"))
