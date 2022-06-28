<<<<<<< HEAD:src/components/layout/Main/index.js
import Test from "../../test/Test";
import Header from "../header";
import Nav from "../Nav";
// import Popup from "../Popup/Popup"
import {  Route, Routes } from "react-router-dom"
import CalibrateCam from "../../../pages/TrainFocus/CalibrateCam";
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";

import Results from "../../../pages/TrainFocus/TrainFocusResults";
import StartFocus from "../../../pages/TrainFocus/FocusTrainStart/StartFocus";
//  import Popup from "./popup/Popup";
// import { Outlet, Route, Routes } from "react-router-dom";
// import TextArea from "../common/TextArea/Index";
// import Context from "../../../context";
=======

// import Header from "./Header";
// import Nav from "./Nav";
// import Popup from "./Popup";
import { Route, Routes } from "react-router-dom";
import Exercise from "../../../pages/TeainFocos/Exercise";


>>>>>>> 3eaa12ab57f6a382ff682188969ee3f873d72c05:src/components/layout/Main/Main.js

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
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>

        {/* Team G */}
<<<<<<< HEAD:src/components/layout/Main/index.js
        <Route path="/train-focus">
          <Route index element={<>team's components</>} />
          <Route path="exercise" element={<>team's components</>} />
          <Route path="StartFocus" element={<StartFocus/>} />
          <Route path="result" element={<Results/>} />
          {/* <Route path="/result" element={<Results />} /> */}
        </Route>
=======
         <Route path="TrainFocos">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} /> 
          <Route path="Exercise" element={<Exercise/>} />

         </Route> 
>>>>>>> 3eaa12ab57f6a382ff682188969ee3f873d72c05:src/components/layout/Main/Main.js

        {/* Team H */}
        <Route path="teams-path">
          <Route index element={<>team's components</>} />
          <Route path="components-path" element={<>team's components</>} />
        </Route>
<<<<<<< HEAD:src/components/layout/Main/index.js

        {/* Test */}
        <Route path="/test" element={<Test />} />
      </Routes>

      <Nav />
      {/* <Popup /> */}
    </>
  );
=======
        </Routes>
        </>
)
>>>>>>> 3eaa12ab57f6a382ff682188969ee3f873d72c05:src/components/layout/Main/Main.js
}
export default Main;
