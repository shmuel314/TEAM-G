import "./style.css";
import FooterStart from "../../../components/common/FooterStart";
import Frame from "../../../assets/img/logo/Frame.png";
import { useContext, useState } from "react";
import { pageNameContext } from "../../../components/layout/Layout.js";
import UmooveApi from "../../../components/api/UmooveApi"
import { useNavigate } from "react-router-dom";


function StartFocus() {
  const nevigate = useNavigate()
  const { RoundNumber, setRoundNumber } = useContext(pageNameContext);
  const title = `START ROUND ${RoundNumber}/4`;
  const explanation =
    "Starting from arms length, press play and then slowly bring device towards your nose. When it starts to feel uncomfortable or you see more than one dot click stop";
  
  function startFunction() {
    setRoundNumber(RoundNumber + 1);
    nevigate("/train-focus/exercise")
  }

  localStorage.setItem("posX" , 200
  )       // ה200 הוא פייק. לקבל משתנה מאורית

  return (
    <div>
      <div className="localLook"  style={{left: localStorage.getItem("posX")+'px'}}>
        <div className="purpleDot" ></div>  
        <div className="arrowToDot"></div>
        <div className="anderDotText">
          <p>Focus on the {"\n"} point above</p>
        </div>
      </div>

      <FooterStart
        startFunction={startFunction}
        title={title}
        explanation={explanation}
        // route={route}
        img={Frame}
      />
    </div>
  );
}

export default StartFocus;

