// reactstrap Button Dropdown 사용하기

import { Dropdown } from "bootstrap";
import { Component } from "react";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

// Dropdown패키지는 대표 메뉴를 클릭하면, 하위 메뉴 리스트가 표시되는 기능
// 대표 메뉴를 누를 때마다 하위 메뉴 리스트를 번갈아가며 표시, 미표시를 해야한다.
// 이를 위해서는 현재 하위 메뉴 리스트 상태가 표시인지 미표시인지에 대한 정보가 필요하다.

class R037_ReactstrapDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = (e) => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  render() {
    return (
      //isOpen 값이 true이면 하위 메뉴가 표시, false이면 미표시된다. 초기값은 false (line20참고) 로 저장한다.
      // 토글버튼을 클릭하면 toggle 함수가 실행된다. 이때 하위 메뉴 표시 상태 값을 반대로 만들어준다.

      // 헤더: 하위 메뉴 리스트에 대한 대표 정보를 기입할 수 있다.
      // disabled 속성을 추가하면 , 버튼을 클릭해도 반응하지 않는다.
      // <a>태그로 버튼을 감싸면, 버튼을 클릭했을 때 원하는 url로 이동할 수 있다.
      // onClick 이벤트로 버튼을 클릭했을 때 alert()와 같은 "함수"를 실행할 수 있다.

      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>헤더</DropdownItem>
          <DropdownItem disabled>비활성화 버튼</DropdownItem>
          <a href="http://naver.com">
            <DropdownItem>네이버 웹사이트로 이동</DropdownItem>
          </a>
          <DropdownItem onClick={(e) => alert("Alert 버튼")}>
            Alert 버튼
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default R037_ReactstrapDropdown;
