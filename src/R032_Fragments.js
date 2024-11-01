// Fragments 사용하기

import React, { Component } from "react";

// 컴포넌트 단위로 element를 return할 때 하나의 <html> 태그로 전체를 감싸지 않으면 에러가 발생한다.
// 이떄 <Fragments>태그로 감싸면 불필요한 <html>태그를 초가하지 않고 사용할 수 있다.

// <React.Fragment> 태그를 사용하지 않았다면, <p>태그와 <span>태그가 하나의 태그로 감싸져 있지 않기 떄문에 에러가 발생한다.
// <Fragment> 태그를 약식으로 다음과 같이 사용할 수 있다.
// <>
// <p>P TAG</p>
// <span>SPAN TAG</span>
// </>
class R032_Fragments extends Component {
  render() {
    return (
      <React.Fragment>
        <p>P TAG</p>
        <span>SPAN TAG</span>
      </React.Fragment>
    );
  }
}

export default R032_Fragments;
