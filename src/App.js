import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import Qoute from './components/Qoute';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Qoute />
      </Provider>
    );
  }
}

export default App;