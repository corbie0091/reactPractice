// reactstrap Input Group 사용하기

import React, { Component } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon, // 더이상 사용하지 않음
  InputGroupText,
} from "reactstrap";

// Input Group 패키지는 "여러 개의 태그를 하나의 input 그룹으로 묶어 사용"할 수 있도록 지원한다.

class R045_InputGroup extends Component {
  render() {
    return (
      <>
        {/* inputGroup태그로 input 태그와 고정 텍스트 표시 영역을 묶어 사용 */}
        <InputGroup>
          <Input placeholder="userId" />
          <InputGroupText>@reactmall.com</InputGroupText>
        </InputGroup>

        {/* inputGroup태그로 input태그와 버튼 영역을 묶어 사용 */}
        <InputGroup>
          <InputGroupText>
            <Button>버튼</Button>
          </InputGroupText>
          <Input />
        </InputGroup>
      </>
    );
  }
}

export default R045_InputGroup;

// To simulate addonType="append", place the InputGroupText (or other components like Button) after the Input.
// To simulate addonType="prepend", place the InputGroupText (or other components) before the Input.
