import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import createStore from './store';
import Router from './routes';

export default class App extends Component {
  render() {
    const initialState = window.__INITIAL_STATE__;
    const store = createStore(initialState);

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
