import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import createStore from './store';

export default class App extends Component {
  render() {
    const initialState = window.__INITIAL_STATE__;
    const store = createStore(initialState);

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>App With Redux</Text>
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};
