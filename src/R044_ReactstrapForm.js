// reactstrap Form 사용하기

import React, { Component } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

// Form 패키지를 이용하면 기존 <html form>태그에 깔끔하고 정리된 스타일을 간편하게 적용해 사용할 수 있다.

// <Form>태그를 이용해 하나의 폼 단위로 사용할 영역을 묶어준다
// <Label>태그로 폼요소를 설명하는 문자열을 추가할 수 있다.
// input 유형을 select로 입력해 <option> 태그 중 하나를 선택할 수 있다.
// 이때 bgSize 속성으로 태그의 크기를 정할 수 있다. sm 대신 lg를 사용하면 큰 크기의 선택박스를 사용할 수 있다.

// <Row>태그는 줄 단위로 태그들을 묶어 사용할 수 있게 해준다.
// <Col>태그는 <Row>태그로 묶인 영역들이 각각 어느정도의 영역을 차지할지 정해준다.
// ㄴ md속성으로 너비값을 정할 수 있는데, 한 줄에 12개의 영역으로 나뉜다.

// <Row>태그에 속한 <Col>태그의 md속성의 합이 12가 되도록 해야한다.
// <FormGroup> 태그는 비슷한 용도의 태그들을 <div>태그로 감싸 사용할 수 있다.

class R044_ReactstrapForm extends Component {
  render() {
    return (
      <Form>
        <Label for="exampleGender">gender</Label>
        <Input type="select" bsSize="sm">
          <option>no select</option>
          <option>woman</option>
          <option>man</option>
        </Input>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleAdrress">address</Label>
              <Input type="text" name="address" id="address" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleMobile">mobile</Label>
              <Input type="text" name="mobile" id="mobile" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleAge">age</Label>
              <Input type="text" name="age" id="age" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default R044_ReactstrapForm;
