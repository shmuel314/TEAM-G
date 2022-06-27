import Calc from "../../pages/Assessment/Calc";
import Page6 from "../../pages/Assessments/Page6";
import RatingAndScore from "../Common/ReatingAndScore";
function Test() {
  return (
    <>
      <RatingAndScore wpm={120} std={5} compScore={8} />
      {/* <Page6 /> */}
      <Calc />
    </>
  );
}

export default Test;
