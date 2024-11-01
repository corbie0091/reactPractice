import React, { Component } from "react";
//props 사용하기
class R017_Props extends Component {
  render() {
    // this.props. 뒤에 상위 컴포넌트 에서 전달받은 props 변수명을 붙이면, 해당 데이터를 사용할 수 있다.
    let props_value = this.props.props_val;
    // 데이터를 수정해야할 경우, props 자체가 아닌 컴포넌트 내부 변수에 옮겨 가공한다.
    props_value += " from App.js";
    return <div>{props_value}</div>;
  }
}

export default R017_Props;
