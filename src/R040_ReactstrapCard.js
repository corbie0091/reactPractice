// reactstrap Card 사용하기

import { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "reactstrap";

// Card 패키지는 이미지 제목, 부제목, 내용, 버튼 등을 한 세트로 묶는다.
// Card 단위로 리스트를 만들어 반복해서 출력하면, 정형화된 콘텐츠 목록을 만들 수 있다.

class R040_ReactstrapCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            height="200px"
            src="https://i.namu.wiki/i/TeQjhSDlPopgIaTIisQy-HUY4PvDF4lfFib8-kgzIrgMMqsJEGM0KbfMsQ7IchdQPaNJo4Yvo1wOa2sPdC0g0g.webp"
            alt="Card image"
          />
          <CardBody>
            <CardTitle>Card 제목</CardTitle>
            <CardSubtitle>
              Card 내용 Lorem Ipsum is simply dummy text.
            </CardSubtitle>
            <Button> 버튼</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default R040_ReactstrapCard;
