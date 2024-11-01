import { PureComponent } from "react";
// PureComponent 사용하기 (class형 컴포넌트)
// Component때보단 다른 점 : 비교대상의 값을 비교해 동일하지 않으면 변경이 발생했다고 본다.
// 즉 불필요한 render() 함수 실행을 줄이면 페이지 성능을 향상시킬 수 있다.
class R028_PureComponentClass extends PureComponent {
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

export default R028_PureComponentClass;
