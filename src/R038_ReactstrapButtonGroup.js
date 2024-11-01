// reactstrap Button Group사용하기

import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

// Button Group 패키지는 비슷한 형태와 기능을 하는 버튼들을 그룹으로 관리할 수 있게 지원해준다.

class R038_ReactstrapButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 10,
    };
  }

  move = (type, e) => {
    if (type === "Left") {
      this.setState({ number: this.state.number - 1 });
    } else if (type === "Right") {
      this.setState({ number: this.state.number + 1 });
    } else {
      this.setState({ number: 10 });
    }
  };

  render() {
    return (
      <div style={{ padding: "0px" }}>
        <ButtonGroup style={{ padding: "0px" }}>
          <Button onClick={(e) => this.move("Left")}>Left</Button>
          <Button onClick={(e) => this.move("초기화")}>초기화</Button>
          <Button onClick={(e) => this.move("Right")}>Right</Button>
        </ButtonGroup>
        <br />
        <div style={{ color: "green", fontSize: "50px" }}>
          {this.state.number}
        </div>
      </div>
    );
  }
}

export default R038_ReactstrapButtonGroup;

// 비슷한 기능을 하는 버튼들을 <ButtonGroup> 태그로 묶어 사용한다.
// 각각의 <Button> 태그를 누를 때마다 move()함수를 호출한다.

// move()함수는 파라미터로 받은 type값으로 버튼을 구분해 state 변수를 변경한다. [left]버튼은 현재 숫자에서 1을빼고 [Right]버튼은 1을 더한다.
