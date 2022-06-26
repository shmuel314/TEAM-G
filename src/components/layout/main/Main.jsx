import Test from "../../test/Test";
import Header from "../header/Header";
import Nav from "../nav/Nav";
import Popup from "../popup/Popup";
import { Outlet, Route, Routes } from "react-router-dom"
import TextArea from "../../common/TextArea/Index";
import Context from "../../../context";


function Main() {

    return <>
        <Context>
            <Header />
            <Routes>

                {/* sign */}
                <Route path="sign-up" >
                    <Route index element={<>sign up</>} />
                    <Route path="connect-teacher" element={<>connect teacher</>} />
                </Route>

                {/* student */}
                <Route path="/student" element={<><h1> protected - route - student  </h1><Outlet /></>}>
                
                    <Route path="read-train">
                        <Route index element={<>focus-train</>} />
                        <Route path="exercise" element={<>exercise</>} />
                        <Route path="exercise" element={<>exercise</>} />
                        <Route path="exercise" element={<>exercise</>} />
                    </Route>
                    <Route path="focus-train">
                        <Route index element={<>focus-train</>} />
                        <Route path="exercise" element={<>exercise</>} />
                    </Route>

                </Route>

                {/* teacher */}
                <Route path="/teacher" element={<><h1> protected - route - teacher  </h1><Outlet /></>}>
                    <Route path="view-create" element={<>view-create</>} />
                    <Route path="class" element={<>class</>} />
                </Route>

                {/* admin - desktop*/}
                <Route path="/admin" element={<><h1> protected - route - admin  </h1><Outlet /></>}>
                    <Route path="add-remove-teacher" element={<>add-remove-teacher</>} />
                </Route>

                <Route path='/test' element={<Test />} />
            </Routes>
            <Nav />
            <Popup />
        </Context>

    </>
}

export default Main