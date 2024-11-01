// reactstrap List Group 사용하기

import React, { Component } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

// List Group 패키지는 정돈된 스타일의 목록을 표시할 때 사용한다.
// <ListGroup> 과 <ListGroupItem> 태그는 html에서 목록을 만드는 태그인 <ul>, <li>로 변환된다.
// 버튼과 <a>태그의 링크에 별도의 태그를 추가하지 않고 속성값으로 간편하게 사용할 수 있다.

//

class R047_ReactstrapListGroup extends Component {
  render() {
    return (
      <>
        <ListGroup>
          <ListGroupItem color="danger" className="justify-content-between">
            Badge<Badge pill>200</Badge>
          </ListGroupItem>
          <ListGroupItem disabled tag="a" href="#">
            disabled
          </ListGroupItem>
          <ListGroupItem tag="a" href="http://naver.com">
            Link
          </ListGroupItem>
          {/* tag속성값을 button으로 하면 <button>태그가 추가된다. onClick 이벤트를 추가해 목록 요소를 클릭시 지정한 함수를 실행한다. */}
          <ListGroupItem tag="button" action onClick={(e) => alert("button")}>
            Button
          </ListGroupItem>
        </ListGroup>
      </>
    );
  }
}

export default R047_ReactstrapListGroup;
