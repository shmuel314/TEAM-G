import DashButt from "../../common/DashButt";
import { navBackButt as NavBackButt } from "../navBackButt";
import CancelBtn from "../../common/cancelBtn";
import DashboardBtn from "../DashboardBtn";
import TrueBtn from "../../common/trueBtn";
import { NavBar } from "../../common/Nav";

// Creator : Team F-Oren
function TeamF() {
  return (
    <>
      <CancelBtn />
      <DashboardBtn />
      <TrueBtn />
      <DashButt />
      <NavBackButt />
      <NavBar />
    </>
  );
}

export default TeamF;
