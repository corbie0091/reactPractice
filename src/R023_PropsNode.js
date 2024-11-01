import React, { Component } from "react";
// props의 자식 Component에 node전달하기
class R023_PropsNode extends Component {
  render() {
    // 상위 컴포넌트에서 전달한 노드는 this.props.children이라는 문법으로 접근해 사용할 수 있다.
    return <div style={{ padding: "0px" }}>{this.props.children}</div>;
  }
}

export default R023_PropsNode;
