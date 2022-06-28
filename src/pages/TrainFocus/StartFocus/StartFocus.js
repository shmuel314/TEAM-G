import FooterStart from "../../../components/common/FooterStart";
import "./style.css";
// import Frame from "../../../assets/img/logo/Frame.png"
import UmooveApi from '../../../components/api/UmooveApi'
import { useEffect } from "react";

function StartFocus() {
  const { RoundNumber, setRoundNumber } = useContext(pageNameContext);

  const title = `START ROUND ${RoundNumber}/4`;
  const explanation =
    "Starting from arms length, press play and then slowly bring device towards your nose. When it starts to feel uncomfortable or you see more than one dot click stop";
  function startFunction() {
    console.log("start");
  };
    const route = "/train-focus/exercise"
    // useEffect(()=>{
    //  setStream(UmooveApi.API_getUmooveStream());
    //   UmooveApi.API_loadUmooveLibrary().then((stream)=>{
    //     //setStream(stream)
    //   }).catch((e)=>{console.error(e)})
    // })

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

// style={{left: posX+'px'}}