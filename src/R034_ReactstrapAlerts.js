// reactstrap Alerts 사용하기

import React, { Component } from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

// bootstrap은 프론트엔드 디자인을 쉽게 구현할 수 있도록 도와주는 html, css, js프레임워크다.
// bootstrap을 react에서 사용할 수 있도록 패키지로 만든 것이 reactstrap이다. Alert패키지는 알림 영역에 대한 기능을 제공한다.

// 설치) cmd - npm i -save reactstrap

// reactstrap은 bootstrap css를 포함하고 있지 않기 때문에 [npm i -save bootstrap]을 입력해 bootstrap도 설치해준다.

class R034_ReactstrapAlerts extends Component {
  render() {
    return (
      <div>
        <Alert color="light">Simple Alert [color : light]</Alert>
        <UncontrolledAlert color="warning">
          Uncontrolled Alert [color : warning]
        </UncontrolledAlert>
      </div>
    );
  }
}

export default R034_ReactstrapAlerts;
