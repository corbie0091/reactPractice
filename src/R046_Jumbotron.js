// reactstrap Jumbotron 사용하기  => Container로 대체됨

import { Component } from "react";
import { Button, Container } from "reactstrap";

// Jumbotron은 "대형 전광판을 의미" = Container
// 넓은 영역에 눈에 띄게 정보를 표시해 사용자의 관심을 불러일으킬 수 있다.

class R046_Jumbotron extends Component {
  render() {
    return (
      <>
        <Container style={{ backgroundColor: "#D38C7C" }}>
          <h1 className="display-4">REACT 200</h1>
          <p className="h4">
            Contrary to popular belief, Lorem ipsum is not simply random text.
          </p>
          <hr className="my-2" />
          <p>
            {" "}
            There are many variations of passages of Lorem Ipsum available.
          </p>
          <p className="lead">
            <Button color="danger">Go Detail</Button>
          </p>
        </Container>
      </>
    );
  }
}

export default R046_Jumbotron;
