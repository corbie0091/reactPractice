// reactstrap Navbar 사용하기

import { Component } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

// Navbar 패키지는 웹사이트의 내부 페이지들로 쉽게 이동할 수 있도록 메뉴 리스트와 링크를 제공한다.

class R049_ReactstrapNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <>
        {/* 전체 navigation영역을 Navbar태그로 묶는다 */}
        <Navbar color="faded" light>
          {/* NavbarBrand부분은 내비게이션에서 무조건 표시되는 영역이다 */}
          <NavbarBrand href="/" className="mr-auto">
            Navbar
          </NavbarBrand>
          {/* NavbarToggler태그는 화면 오른쪽에 표시되는 버튼으로 클릭시 toggle 함수를 실행한다 */}
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          {/* Collapse태그는 toggle함수가 실행되면 표시 <-> 미표시되는 영역이다. collapsed값에 따라 동작한다 */}
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">react</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://naver.com">200</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default R049_ReactstrapNavbar;
