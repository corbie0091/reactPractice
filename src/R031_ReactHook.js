import React, { useState, useEffect, useRef } from "react";

function R031_ReactHook(props) {
  // useState함수로 state변숫값을 선언 및 할당한다.
  // 이떄 두 가지 인자가 선언된 배열이 반환된다.
  // 첫 번째 인자 contents는 state 변수명, 두 번째 인자 setContent는 state 변숫값을 변경해주는 메서드(함수)
  const [contents, setContents] = useState("[THIS IS REACT]");
  const renderCount = useRef(0);
  // useEffect()함수는 생명주기 함수 componentDidMount()와 같이 return되는 html코드들이
  // 화면에 그러진 이후에 실행된다. 최초 페이지가 로딩될 때 한 번 실행되고,
  useEffect(() => {
    renderCount.current += 1; // 렌더링될 때마다 1씩 증가
    console.log("useEffect 실행");
    console.log(`렌더링 횟수: ${renderCount.current}`);
  });

  return (
    <div style={{ padding: "0px" }}>
      <h2>{contents}</h2>
      {/* setContents() 함수로 state값이 변경되면 한 번 더 실행된다.(useEffect에 의해서) */}
      <button onClick={() => setContents("[THIS IS HOOK]")}> 버튼 </button>
    </div>
  );
}

export default R031_ReactHook;

// useRef를 활용해서 렌더링 횟수를 체크할 수 있게 코드를 짰다. line 1, 8, 13, 14

/*
React에서 useEffect, useRef, 그리고 상태 관리를 사용할 때 몇 가지 주의해야 할 점들이 있습니다.
이러한 부분들이 버그나 성능 문제로 이어질 수 있습니다. 다음은 그에 대한 몇 가지 예시입니다:

1. 상태 업데이트의 비동기성:
setState와 같은 상태 업데이트 함수는 비동기로 작동합니다.
이는 상태가 즉시 업데이트되지 않음을 의미합니다. 따라서 현재 상태에 기반하여 업데이트를 수행할 경우 예상치 못한 결과를 초래할 수 있습니다.
예를 들어, 버튼 클릭 시 상태를 기반으로 계산된 값을 설정하려 할 때, 현재 상태를 바로 참조하면 이전 상태가 사용될 수 있습니다.

2. 무한 루프:
useEffect 내에서 상태를 업데이트하면 해당 상태가 변경되면서 다시 렌더링이 발생하고, 이로 인해 useEffect가 다시 실행될 수 있습니다.
만약 이러한 방식으로 상태 업데이트를 반복하면 무한 루프가 발생할 수 있습니다.
이를 방지하기 위해서는 useEffect의 의존성 배열을 적절히 설정해야 합니다.

3. 성능 저하:
불필요한 렌더링이 발생할 경우 성능 문제가 발생할 수 있습니다.
예를 들어, useEffect가 의존성 배열 없이 정의되면, 컴포넌트가 렌더링될 때마다 useEffect가 실행됩니다.
이는 성능 저하를 초래할 수 있습니다.성능 문제를 피하려면 의존성 배열을 잘 활용하고, 상태 업데이트를 최소화하는 것이 좋습니다.

4. 잘못된 의존성:
useEffect 내에서 사용되는 변수나 함수가 의존성 배열에 포함되지 않으면,
해당 값이 변경되어도 useEffect가 실행되지 않을 수 있습니다.
이로 인해 예상치 못한 동작이나 버그가 발생할 수 있습니다.
모든 필요한 의존성을 명시적으로 나열하는 것이 중요합니다.

5. 자원 누수:
useEffect에서 구독, 타이머, 이벤트 리스너 등을 설정할 때는 반드시 정리(cleanup) 작업을 수행해야 합니다.
그렇지 않으면 자원 누수가 발생할 수 있습니다.
컴포넌트가 언마운트될 때 정리 작업을 해주는 것은 매우 중요합니다.

요약
React 훅을 사용할 때는 이러한 문제들을 염두에 두고 적절히 관리해야 합니다.
항상 상태 업데이트의 비동기성, useEffect의 의존성 관리, 그리고 성능 최적화에 주의하여 개발하는 것이 중요합니다.
이를 통해 잠재적인 버그와 성능 문제를 최소화할 수 있습니다.
*/
