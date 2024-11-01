import React, { Component } from "react";
import $ from "jquery";

class R016_Jquery extends Component {
  state = {
    showModal: false,
    inputValue: "",
  };

  input_alert = (e) => {
    const input_val = $("#inputId").val();
    this.setState({ showModal: true, inputValue: input_val });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <h2>[THIS IS Jquery]</h2>
        <input id="inputId" name="inputName" placeholder="값을 입력하세요" />
        <button id="buttonId" onClick={this.input_alert}>
          Jquery Button
        </button>

        {/* 사용자 정의 모달 */}
        {this.state.showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>
                &times;
              </span>
              <p>입력한 값입니다: {this.state.inputValue}</p>
            </div>
          </div>
        )}

        <style>
          {`
            .modal {
              display: flex;
              position: fixed;
              z-index: 1;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              overflow: auto;
              background-color: rgb(0,0,0);
              background-color: rgba(0,0,0,0.4);
              justify-content: center;
              align-items: center;
            }
            .modal-content {
              background-color: #fefefe;
              padding: 20px;
              border: 1px solid #888;
              width: 300px;
              text-align: center;
            }
            .close {
              color: #aaa;
              float: right;
              font-size: 28px;
              font-weight: bold;
            }
            .close:hover,
            .close:focus {
              color: black;
              text-decoration: none;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  }
}

export default R016_Jquery;

// import React, { Component } from "react";
// import $ from "jquery";

// class R016_Jquery extends Component {
//   input_alert = (e) => {
//     var input_val = $("#inputId").val();
//     alert("입력한 값입니다: " + input_val); // 알림 메시지 수정
//   };

//   render() {
//     return (
//       <div>
//         <h2>[THIS IS Jquery]</h2>
//         <input
//           id="inputId"
//           name="inputName"
//           placeholder="값을 입력하세요" // 안내 텍스트 추가
//         />
//         <button id="buttonId" onClick={(e) => this.input_alert(e)}>
//           Jquery Button
//         </button>
//       </div>
//     );
//   }
// }

// export default R016_Jquery;
