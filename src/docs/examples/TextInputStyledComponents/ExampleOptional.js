import React, { Component } from 'react';
import TextInput from 'ps-react/TextInputStyledComponents';

/** Optional TextBox */
class ExampleOptional extends Component {
  render() {
    return (
      <TextInput
        htmlId="example-optional"
        name="firstname"
        label="First Name"
        onChange={() => {}}
      />
    );
  }
}

export default ExampleOptional;
