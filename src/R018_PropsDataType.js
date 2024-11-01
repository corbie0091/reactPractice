import React, { Component } from "react";
import datatype from "prop-types";
import { data } from "jquery";

class R018_PropsDataType extends Component {
  render() {
    let { String, Number, Boolean, Array, ObjectJson, Function } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        <p>StringProps: {String}</p>
        <p>NumberProps: {Number}</p>
        <span>BooleanProps: {Boolean.toString()}</span>
        <p>ArrayProps: {Array.toString()}</p>
        <p>ObjectProps: {JSON.stringify(ObjectJson)}</p>
        <p>FunctionProps: {Function}</p>
      </div>
    );
  }
}

R018_PropsDataType.propTypes = {
  String: datatype.string,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func,
};

export default R018_PropsDataType;
