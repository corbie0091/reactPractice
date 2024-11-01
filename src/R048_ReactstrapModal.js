// reactstrap Modal 사용하기

import { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

// Modal 패키지는 alert() 함수와 마찬가지로 사용자에게 원하는 시점에 알림 창을 띠워 필요한 내용을 보여준다.
// Modal은 alert함수와 달리, 웹 브라우저에서 팝업 창을 차단할 수 없고 배경 페이지와 어울리는 디자인을 적용할 수 있다.

class R048_ReactstrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <>
        <Button color="warning" onClick={this.toggle}>
          Modal 버튼
        </Button>
        {/* // 밑부분에서의 toggle부분은 esc나 다른 곳을 클릭했을때 닫히도록 도와주게끔해주기떄문에 중요한 코드이다. */}
        <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
          {/* // 팝업에서 상단 헤더 영역을 나타냄. toggle 속성에 입력된 toggle 함수는 헤더 오른쪽 영역의 x를 클릭했을때 실행됨 */}
          <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
          <ModalBody>
            This generated Lorem Ipsum is therefore always free from reptition.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              확인
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              닫기
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default R048_ReactstrapModal;
