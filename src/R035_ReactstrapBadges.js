// reactstrap Badge 사용하기

import React, { Component } from "react";
import { Badge, Button } from "reactstrap";
// Badge 패키지는 부모 요소에 추가로 특정 문자열이나 숫자를 표시할 떄 사용된다.

// 다양한 배지들이 있음
// pill 속성 : 테두리를 둥글게 적용
// href 속성 : 배지에 링크 연결 가능
// 버튼안에 배지를 추가 : 접속자 ,메시지의 수와 같은 어떤 속성으 수치를 나타낼때 사용할 수 있음

class R035_ReactstrapBadges extends Component {
  render() {
    return (
      <div>
        <h1>
          PRODUCT NAME <Badge color="secondary">hit</Badge>
        </h1>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>
          pill
        </Badge>
        <Badge href="http://naver.com" color="light">
          GoLink
        </Badge>
      </div>
    );
  }
}

export default R035_ReactstrapBadges;
