import { Component } from "react";
// state사용하기
class R024_ReactState extends Component {
  // 가장 먼저 실행되는 constructor 생성자 함수 안에서 state 변수 의 초기값을 정의해야한다.
  constructor(props) {
    super(props);
    this.state = {
      //  StateString 변수안에는 props로 전달된 reactString값을 저장하고
      StateString: this.props.reactString,
      // StateNumber 변수안에는 숫자 200을 저장한다
      StateNumber: 200,
    };
  }
  render() {
    return (
      <div style={{ padding: "0px" }}>
        {/* this.state.변수명 문법으로 state변수에 접근한다. 이를 그대로 표시한다 */}
        {this.state.StateString}
        {this.props.reactString}
        {this.state.StateNumber}
      </div>
    );
  }
}

export default R024_ReactState;
