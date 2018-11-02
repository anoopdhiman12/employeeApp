import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { emailChanged, passwordChanged, loginUser} from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { View, Text } from 'react-native'

class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text)
  }
  onPasswordChange(text){
    this.props.passwordChanged(text)
  }

  onButtonPress(){
    const { email, password } = this.props;
    this.props.loginUser( email, password )
  }

  renderError(){
    if(this.props.error){
      return (
        <View style={{ bakckGroundColor:'white' }}>
        <Text style={style.errorTextStyle}>
        {this.props.error}
        </Text>
        </View>
      )
    }
  }

  renderButton(){
    if(this.props.loading){
      return <Spinner size='large'></Spinner>
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    )
  }


  render () {
    return (
      <Card>
        <CardSection>
          <Input label="Email" 
          placeholder="user@email.com" 
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          ></Input>
        </CardSection>
        <CardSection>
          <Input 
          secureTextEntry 
          label="Password" 
          placeholder="Password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          ></Input>
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}


const style ={
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color:'red'
  }
}

const mapStateToProps = state => {
  return{
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

// const mapDispatchToProps = dispatch => ({
//   sendMessage: message => dispatch(sendMessage(message)),
//   deleteMessage: id => dispatch(deleteMessage(id)),
// })

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser } )(LoginForm);