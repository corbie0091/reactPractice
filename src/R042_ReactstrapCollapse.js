// reactstrap Collapse 사용하기

import React, { Component } from "react";
import { Button, Card, CardBody, UncontrolledCollapse } from "reactstrap";

// Collapse 패키지는 "특정 영역을 펼치고 숨기는 기능"을 제공

// 버튼 이벤트로 펼치고 숨기는 기능을 제어할 수 있다.

// 상단부터 점차적으로 펼쳐지고 하단부터 숨겨진다는 것이 show(), hide()함수와의 차이점이다.

class R042_ReactstrapCollapse extends Component {
  render() {
    return (
      <div>
        <Button color="warning" id="toggle">
          펼치기/접기
        </Button>
        <UncontrolledCollapse toggler="#toggle">
          <Card>
            <CardBody>React 200</CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}

export default R042_ReactstrapCollapse;
