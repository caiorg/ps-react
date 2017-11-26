import React, { Component } from 'react';
import TextInputCSSModules from 'ps-react/TextInputCSSModules';

/** Optional TextBox */
class ExampleOptional extends Component {
  render() {
    return (
      <TextInputCSSModules
        htmlId="example-optional"
        name="firstname"
        label="First Name"
        onChange={() => {}}
      />
    );
  }
}

export default ExampleOptional;
