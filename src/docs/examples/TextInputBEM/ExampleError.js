import React, { Component } from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Required TextBox with error */
class ExampleError extends Component {
  render() {
    return (
      <TextInputBEM
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
