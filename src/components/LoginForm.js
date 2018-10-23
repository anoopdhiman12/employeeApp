import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'

class LoginForm extends Component {
  render () {
    return (
      <Card>
        <CardSection>
          <Input label="Email" plageholder="user@email.com"></Input>
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" plageholder="Password"></Input>
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
