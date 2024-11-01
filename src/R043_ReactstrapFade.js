// reactstrap Fade 사용하기

import React, { Component } from "react";
import { Button, Fade } from "reactstrap";

// Fade 패키지는 "특정 영역을 서서히 나타내고 숨기는 기능"을 제공 - 기능을 버튼 이벤트로 제어 가능

class R043_ReactstrapFade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // <Fade> 태그 영역의 표시 상태를 state로 선언, 초기값은 표시인 true로 할당한다.
      fadeInOut: true,
    };
  }
  // toggle함수는 fadeInOut 값을 현재 상태의 반대로 할당한다.
  // setState() 함수가 실행되면 render() 함수가 한 번 더 실행되 변경된 fadeInOut 값이 적용된다.
  // 결과적으로 버튼이 클릭될때마다 <Fade> 태그 영역은 현재 상태가 표시 <-> 미표시가 계속 전환된다.
  toggle = (e) => {
    this.setState({ fadeInOut: !this.state.fadeInOut });
  };

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>
          Fade In/Out
        </Button>
        {/* <Fade>태그는 in 속성이 true이면 표시, false이면 미표시 fadeInOut의 초기값이 true여서 표시됨 */}
        <Fade in={this.state.fadeInOut} tag="h6">
          Lorem ipsum dolor sit amet, contents adipising elit
        </Fade>
      </div>
    );
  }
}

export default R043_ReactstrapFade;
