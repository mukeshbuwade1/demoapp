import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import RootNav from "./navigation/RootNav";
import Store from './redux/Store';
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={Store} >
      <RootNav />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
