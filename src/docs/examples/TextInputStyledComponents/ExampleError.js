import React, { Component } from 'react';
import TextInput from 'ps-react/TextInputStyledComponents';

/** Required TextBox with error */
class ExampleError extends Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        name="firstname"
        label="First Name"
        onChange={() => {}}
        required
        error="First name is required."
      />
    );
  }
}

export default ExampleError;
