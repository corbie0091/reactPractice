import { Component } from "react";
import { shallowEqualArrays, ShallowEqualArrays } from "shallow-equal";

// shallow-equal 사용하기
// class형 컴포넌트

// shallow-equal 패키지는 PureComponent 에서 state값의 변경을 비교하는 것과 동일한 기능을 하는 함수를 제공한다.
// shallowEqualArrays() 함수를 사용하면 문자열과 배열은 값만 비교한다.
// 객체는 PureComponent와 동일하게 참조 값을 비교한다.

class R029_ShallowEqual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
    };
  }
  // shouldComponentUpdate() 함수는 변경된 props와 state값을 파라미터로 받을 수 있고 반환 값이 true일때 render()함수를 실행시킨다.

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqualArrays(this.state, nextState);
  }

  componentDidMount() {
    const object = { react: "200" };
    const Array1 = ["리액트", object];
    const Array2 = ["리액트", object];
    const Array3 = ["리액트", { react: "200" }];

    console.log(
      // 선언한 Array1,2값을 비교한다. 이때 object 변수는 동일한 객체를 참조한다. 반환값 true
      "shallowEqualArrays(Array1, Array2) : " +
        shallowEqualArrays(Array1, Array2)
    );
    console.log(
      // 선언한 배열의 값을 비교한다. 이때 object의 값은 같지만, 서로 다른 참조값을 갖는 다른 객체다.
      // 이에따라 false값을 반환한다.
      "shallowEqualArrays(Array2, Array3) : " +
        shallowEqualArrays(Array2, Array3)
    );

    // 문자열 state값이 변경됐는데, 원래 Component 클래스에서는 변경으로 인식해 render()함수를 실행시킨다.
    // 그러나 shouldComponentUpdate() 함수에서 shallowEqualArrays()함수로 값만 비교하기 떄문에 false를 반환,
    // render() 함수를 재실행시키지 않는다.
    // 즉 setState로 State값이 변경이 되었지만, false이므로 재실행시키지 않게된다는 건가?
    this.setState({ StateString: "react" });
  }

  render() {
    return console.log("render() 실행");
  }
}

export default R029_ShallowEqual;

/*
shallowEqualArrays 함수)
 배열이나 문자열의 경우 값만 비교하고,객체는 참조 값을 비교. 
 즉, this.state와 nextState의 값을 비교해 **값이 동일한 경우 true**를 반환.

 shouldComponentUpdate) 
 shallowEqualArrays가 true를 반환하면 
 !shallowEqualArrays(this.state, nextState)가 false가 되어 render가 재실행되지 않음.

 componentDidMount) 
 setState({ StateString: "react" })를 호출,
 StateString의 기존 값이 "react"였으므로 새로운 상태와 기존 상태가 동일. 
 shallowEqualArrays는 동일한 문자열을 값 비교로 true를 반환하므로 render 함수는 호출되지 않음.

 따라서)
 shouldComponentUpdate는 render 재실행 조건을 설정하는 역할,
 이번 예제에서는 StateString 값이 실제로 변하지 않았기 때문에 render 함수가 실행되지 않게됨.

*/
