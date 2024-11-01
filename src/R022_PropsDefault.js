import { Component } from "react";

// props를 기본값으로 정의하기
class R022_PropsDefault extends Component {
  render() {
    let { ReactString, ReactNumber } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        {ReactString}
        {ReactNumber}
      </div>
    );
  }
}

R022_PropsDefault.defaultProps = {
  // ReactString은 전달된 데이터가 없으므로 여기서 지정한 기본값이 화면에 표시된다.
  ReactString: "리액트",
  // 변수값이 상위 컴포넌트에서 전달(200)되었기 때문에 지정한 기본값인 400은 무시된다
  ReactNumber: 400,
};
export default R022_PropsDefault;
