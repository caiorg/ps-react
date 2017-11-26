import React, { Component } from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Optional TextBox */
class ExampleOptional extends Component {
  render() {
    return (
      <TextInputBEM
        htmlId="example-optional"
        name="firstname"
        label="First Name"
        onChange={() => {}}
      />
    );
  }
}

export default ExampleOptional;
