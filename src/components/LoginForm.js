import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: '' };

  render() {
    const { textInputStyle } = styles;
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            style={textInputStyle}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>
            <Text>Login</Text>
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textInputStyle: {
    height: 20,
    flex: 1,
    width: null,
  }
};

export default LoginForm;
