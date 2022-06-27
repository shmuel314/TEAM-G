import Page4 from "../../pages/Assessments/Page4";

import Calc from "../../pages/Assessment/Calc";
// import Page6 from "../../pages/Assessments/Page6";
import RatingAndScore from "../Common/ReatingAndScore";
function Test() {
    // function Test() {
    return (<>
        <Page4 />


        <RatingAndScore wpm={120} std={5} compScore={8} />
        {/* <Page6 /> */}
        <Calc />
    </>)
}
{/* } */ }

export default Test;
