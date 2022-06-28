import FooterStart from "../../../components/common/FooterStart";
import "./style.css";
import Frame from "../../../assets/img/logo/Frame.png";
import { useContext, useState } from "react";
import { pageNameContext } from "../../../components/layout/Layout.js";

function StartFocus() {
  const { RoundNumber, setRoundNumber } = useContext(pageNameContext);

  const title = `START ROUND ${RoundNumber}/4`;
  const explanation =
    "Starting from arms length, press play and then slowly bring device towards your nose. When it starts to feel uncomfortable or you see more than one dot click stop";
  const route = "/train-focus/exercise";

  function startFunction() {
    setRoundNumber(RoundNumber + 1);
  }

  return (
    <div>
      <div className="localLook">
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
        route={route}
        img={Frame}
      />
    </div>
  );
}

export default StartFocus;