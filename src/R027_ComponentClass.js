import { Component } from "react";

// Component 사용하기 (class형 컴포넌트)
// class형 컴포넌트에는 Component와 PureComponent가 있다. 두 컴포넌트 모두 props와 state의 변경에 따라 render()함수를 호출하는데,
// 변경에 대한 기준이 다르다. Component에서는 비교 대상이 완전히 동일하지 않으면 변경이 발생했다고 본다.
class R027_ComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react", { react: "200" }],
    };
  }

  buttonClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "react" });
    } else {
      this.setState({ StateArrayObj: ["react", { react: "200" }] });
    }
  };

  render() {
    console.log("render() 실행");
    return (
      <div>
        <button onClick={(e) => this.buttonClick("String")}>문자열 변경</button>
        <button onClick={(e) => this.buttonClick("ArrayObject")}>
          객체 배열 변경
        </button>
      </div>
    );
  }
}

export default R027_ComponentClass;
