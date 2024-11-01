// map()으로 element반환하기

import React, { Component } from "react";

// 반복해서 출력해야 하는 element들을 배열에 넣어두고 map()함수로 순서대로 나열해 컴포넌트를 return 할 수 있다.

class R033_ReturnMap extends Component {
  render() {
    const element_Array = [<li>react</li>, <li>200</li>, <li>Array Map</li>];
    // map()함수로 element_Array 배열에 있는 element들을 순서대로 꺼내 <ul> 태그 안쪽에 출력한다.
    return <ul>{element_Array.map((array_val) => array_val)}</ul>;
  }
}

export default R033_ReturnMap;
