import React from "react";
import ClassPrototype from "./R012_Class&Prototype";
import ArrowFunc from "./R013_ArrowFunction";
import ForEach from "./R014_ForEach";
import Map from "./R015_Map";
import Jquery from "./R016_Jquery";
import Props from "./R017_Props";
import PropsDataType from "./R018_PropsDataType";
import PropsBoolean from "./R019_PropsBoolean";
import PropsObjVal from "./R020_PropsObjVal";
import PropsRequired from "./R021_PropsRequired";
import PropsDefault from "./R022_PropsDefault";
import PropsNode from "./R023_PropsNode";
import ReactState from "./R024_ReactState";
import SetState from "./R025_SetState";
import ComponentClass from "./R027_ComponentClass";
import PureComponentClass from "./R028_PureComponentClass";
import ShallowEqual from "./R029_ShallowEqual";
import FunctionComponent from "./R030_FunctionComponent";
import ReactHook from "./R031_ReactHook";
import Fragments from "./R032_Fragments";
import ReturnMap from "./R033_ReturnMap";
import ReactstrapAlerts from "./R034_ReactstrapAlerts";
import "bootstrap/dist/css/bootstrap.css";
import ReactstrapBadges from "./R035_ReactstrapBadges";
import ReactstrapBreadcrumbs from "./R036_ReactstrapBreadcrumbs";
import ReactstrapDropdown from "./R037_ReactstrapDropdown";
import ReactstrapButtonGroup from "./R038_ReactstrapButtonGroup";
import ReactstrapBottons from "./R039_ReactstrapBottons";
import ReactstrapCard from "./R040_ReactstrapCard";
import ReactstrapCarousel from "./R041_ReactstrapCarousel";
import ReactstrapCollapse from "./R042_ReactstrapCollapse";
import ReactstrapFade from "./R043_ReactstrapFade";
import ReactstrapForm from "./R044_ReactstrapForm";
import InputGroup from "./R045_InputGroup";
import Jumbotron from "./R046_Jumbotron";
import ReactstrapListGroup from "./R047_ReactstrapListGroup";
import ReactstrapModal from "./R048_ReactstrapModal";
import ReactstrapNavbar from "./R049_ReactstrapNavbar";
import ReactstrapPagination from "./R050_ReactstrapPagination";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      {/* <ClassPrototype /> */}
      {/* <ArrowFunc /> */}
      {/* <ForEach /> */}
      {/* <Map /> */}
      {/* <Jquery /> */}
      {/* <Props props_val="THIS IS PROPS" /> */}
      {/* <PropsDataType
        String="react"
        Number={200}
        Boolean={1 == 1}
        Array={[0, 1, 8]}
        ObjectJson={{ react: "리액트", twohundred: "200" }}
        Function={console.log("FunctionProps: function!")}
      /> */}
      {/* <PropsBoolean BooleanTrueFalse={false} />
      <PropsBoolean BooleanTrueFalse /> */}
      {/* <PropsObjVal ObjectJson={{ react: "리액트", twohundred: "200" }} /> */}
      {/* <PropsRequired ReactNumber={200} /> */}
      {/* <PropsDefault ReactNumber={200} /> */}
      {/* <PropsNode>
        <span> node from App.js</span>
      </PropsNode> */}
      {/* <ReactState reactString={"react"} /> */}
      {/* <SetState /> */}
      {/* <ComponentClass /> */}
      {/* <PureComponentClass /> */}
      {/* <ShallowEqual /> */}
      {/* <FunctionComponent contents="[THIS IS FunctionComponent ]" /> */}
      {/* <ReactHook /> */}
      {/* <Fragments /> */}
      {/* <ReturnMap /> */}
      {/* <ReactstrapAlerts /> */}
      {/* <ReactstrapBadges /> */}
      {/* <ReactstrapBreadcrumbs /> */}
      {/* <ReactstrapDropdown /> */}
      {/* <ReactstrapButtonGroup /> */}
      {/* <ReactstrapBottons /> */}
      {/* <ReactstrapCard /> */}
      {/* <ReactstrapCarousel /> */}
      {/* <ReactstrapCollapse /> */}
      {/* <ReactstrapFade /> */}
      {/* <ReactstrapForm /> */}
      {/* <InputGroup /> */}
      {/* <Jumbotron />  //사실 이부분은 Container로 용어가 대체된 상태임 */}
      {/* <ReactstrapListGroup /> */}
      {/* <ReactstrapModal /> */}
      {/* <ReactstrapNavbar /> */}
      <ReactstrapPagination />
    </div>
  );
}

export default App;
