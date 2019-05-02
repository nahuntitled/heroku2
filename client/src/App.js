import React, { Component } from 'react';
import Routes from "./js/routes"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import { loadUser } from './js/actions/authActions';
import { getConfig } from './js/actions/itemActions'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import './App.css';

store.dispatch(loadUser());
store.dispatch(getConfig());

class App extends Component {

  render() {
    return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
    )
  }
}

export default App;
