import React, { Component } from 'react';
import TextInputCSSModules from 'ps-react/TextInputCSSModules';

/** Required TextBox with error */
class ExampleError extends Component {
  render() {
    return (
      <TextInputCSSModules
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
