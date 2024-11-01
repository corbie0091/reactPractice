// reactstrap Pagination 사용하기

import { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

// 데이터 수가 많아 한 페이지에 모두 표시할 수 없을 때는 여러 페이지에 나눠 표시한다.
// Pagination 패키지는 페이지 번호, 이전/다음 페이지 첫/마지막 페이지 버튼을 쉽게 구현할 수 있게 지원해준다.

// 일단 페이지 버튼을 클릭했을 때 파라미터에 따라 알림 창을 표시한다.

// Pagination 태그로 전체 페이징에 사용할 영역을 묶어준다.
// PaginationItem 태그 단위로 각각의 버튼을 구분한다.
// PaginationLink 태그로 버튼에 표시될 텍스트를 감싼다.
// 이떄 텍스트를 감싸는 대신 속성 값(first, previous, next, last)을 추가해 표현 할 수 있다.
// onClick 이벤트를 추가하면 함수를 실행해 이동할 페이지 정보를 파라미터로 받을 수 있다.
class R050_ReactstrapPagination extends Component {
  pagination = (type) => {
    alert("Go " + type);
  };

  render() {
    return (
      <>
        <Pagination size="lg" aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink
              previous
              onClick={(e) => this.pagination("previous")}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={(e) => this.pagination("1")}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={(e) => this.pagination("2")}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last onClick={(e) => this.pagination("last")} />
          </PaginationItem>
        </Pagination>
      </>
    );
  }
}

export default R050_ReactstrapPagination;
