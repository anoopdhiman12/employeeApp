import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

class App extends Component {
  componentWillMount () {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyC0XpLH_4E4tidNzCVQB93sWCBSOzvzUTk',
      authDomain: 'employee-81e20.firebaseapp.com',
      databaseURL: 'https://employee-81e20.firebaseio.com',
      projectId: 'employee-81e20',
      storageBucket: 'employee-81e20.appspot.com',
      messagingSenderId: '523895500151'
    }
    firebase.initializeApp(config)
  }
  render () {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    )
  }
}

export default App
