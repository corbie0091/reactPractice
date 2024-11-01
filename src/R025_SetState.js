import { Component } from "react";
//setState() 함수 사용하기
//  setState는 React가 상태가 업데이트되었음을 인식하게 하고,
//  이를 통해 자동으로 render 함수를 호출하여 화면을 다시 렌더링합니다.
//  하지만 this.state에 직접 값을 할당하면 React의 상태 변경 감지가
//  작동하지 않기 때문에 render 함수도 다시 호출되지 않습니다.
class R025_SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
    };
  }

  StateChange = (flag) => {
    if (flag == "direct") {
      this.state.StateString = "리액트";
      this.forceUpdate(); // 강제 렌더링 하는 방법 ( setState없이 강제로도 가능하긴 하지만 권장x )
    }
    if (flag == "setState") this.setState({ StateString: "리액트" });
  };

  render() {
    return (
      <div style={{ padding: "0px" }}>
        <button onClick={(e) => this.StateChange("direct", e)}>
          state 직접 변경
        </button>
        <button onClick={(e) => this.StateChange("setState", e)}>
          setState로 변경
        </button>
        <br />
        [State 변경하기] StateString : {this.state.StateString}
      </div>
    );
  }
}

export default R025_SetState;
