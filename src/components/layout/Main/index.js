import Test from "../../test/Test";
// import Header from "../Header";
import Nav from "../Nav";
// import Popup from "../Popup/Popup"
import { Route, Routes } from "react-router-dom";
import CalibrateCam from "../../../pages/TrainFocus/CalibrateCam";
// import Context from "../../../context";

import Results from "../../../pages/TrainFocus/TrainFocusResults";
import StartFocus from "../../../pages/TrainFocus/StartFocus/StartFocus";
import Exercise from "../../../pages/TrainFocus/Exercise";
//  import Popup from "./popup/Popup";
// import { Outlet, Route, Routes } from "react-router-dom";
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";
import Popup from "../Popup";
import Header from "../header"
import TeamF from "../../teams/TeamF";

function Main() {
  return (
    <>
      <Header />
      {/* content */}
      <Routes>
        {/* Team A */}
        <Route path="teama">
          <Route index element={<>ghdsf</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route> 

        {/* Team B */}
        {/* <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route> */}

        {/* Team C */}
        <Route path="train_reading_level">
          {/* <Route index element={<>team's components</>} /> */}
          {/* <Route path="exercise" element={<Exercise/>} />
          <Route path="exercise_clock" element={<ExerciseClock/>} />
          <Route path="rate" element={<ExerciseRate/>} />
          <Route path="question" element={<ExerciseQuestion/>} />
          <Route path="result" element={<ExerciseResult/>} /> */}
        </Route>

        {/* Team D */}
        {/* <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route> */}

        {/* Team E */}
        {/* <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route> */}

        {/* Team F */}
        <Route path="/teamf">
          {/* <Route index element={<TeamF />} /> */}
          {/* <Route path="components-path" element={<TeamF />} /> */}
        </Route>

        {/* Team G */}
        <Route path="/train-focus">
          <Route index element={<>team's components</>} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="StartFocus" element={<StartFocus />} />
          <Route path="result" element={<Results />} />
          <Route path="Calibratecam" element={<CalibrateCam />} />
          {/* <Route path="/result" element={<Results />} /> */}
        </Route>

        {/* Team H */}
        <Route path="/teams/TeamH">
          {/* <Route index element={<TeamH />} /> */}
          {/* <Route path="/teams/TeamH/Training" element={<Training />} /> */}
          {/* <Route path="components-path" element={<>team's components</>} /> */}
        </Route>

        {/* Test */}
        <Route path="/test" element={<Test />} />
        {/* <Route path="test/Dashboard" element={<Dashboard />} /> */}
      </Routes>
      <Nav />
      {/* <Popup /> */}
    </>
  );
}
export default Main;
