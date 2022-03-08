import React, { Component } from "react";

import Select from "react-select";
import { colourOptions } from "./docs/data";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newSelection) {
    console.log("___ multi: ", newSelection);
    this.setState({
      value: newSelection
    });
  }

  render() {
    return (
      <Select
        value={this.state.value}
        onChange={this.handleChange}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    );
  }
}
