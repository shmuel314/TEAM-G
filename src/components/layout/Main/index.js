import Test from "../../test/Test";
import Header from "../header";
import Nav from "../Nav";
// import Popup from "../Popup/Popup"
import {  Route, Routes } from "react-router-dom"
import CalibrateCam from "../../../pages/TrainFocus/CalibrateCam";
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";

import Results from "../../../pages/TrainFocus/TrainFocusResults";
import StartFocus from "../../../pages/TrainFocus/StartFocus/StartFocus";
import Exercise from "../../../pages/TrainFocus/Exercise";
//  import Popup from "./popup/Popup";
// import { Outlet, Route, Routes } from "react-router-dom";
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";

function Main() {

  return (
    <>
      {/* <Header /> */}

      content
      <Routes>
        {/* Team A */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team B */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team C */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team D */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team E */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team F */}
        <Route path="teams-path">
          <Route index element={<></>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team G */}
        <Route path="/train-focus">
          <Route index element={<>team's components</>} />
          <Route path="exercise" element={<Exercise/>} />
          <Route path="StartFocus" element={<StartFocus/>} />
          <Route path="result" element={<Results/>} />
          <Route path="CalibrateCam" element={<CalibrateCam/>} />
          {/* <Route path="/result" element={<Results />} /> */}
        </Route>

        {/* Team H */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Test */}
        <Route path="/test" element={<Test />} />
      </Routes>

      <Nav />
      {/* <Popup /> */}
    </>
  );
}
export default Main;
