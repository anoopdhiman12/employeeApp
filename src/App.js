import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
    
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC0XpLH_4E4tidNzCVQB93sWCBSOzvzUTk",
      authDomain: "employee-81e20.firebaseapp.com",
      databaseURL: "https://employee-81e20.firebaseio.com",
      projectId: "employee-81e20",
      storageBucket: "employee-81e20.appspot.com",
      messagingSenderId: "523895500151"
    };
    firebase.initializeApp(config)
  }
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    )
  }
}

export default App
