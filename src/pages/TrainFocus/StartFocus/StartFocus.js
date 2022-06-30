import "./style.css";
import FooterStart from "../../../components/common/FooterStart";
import Frame from "../../../assets/img/logo/Frame.png";
import { useContext, useState, useEffect, useRef } from "react";
import { pageNameContext } from "../../../components/layout/Layout.js";
import UmooveApi from "../../../components/api/UmooveApi";
import { useNavigate } from "react-router-dom";
import Popup from "../../../components/layout/Popup";

function StartFocus() {
  const videoRef = useRef();
  const [popup, setPopup] = useState(false);
  const cameraPosX = localStorage.getItem("cameraPosX");
  const textCameraPosX = cameraPosX-49;
  const [mirror, setMirror] = useState("");
  const [focusIsOk, setFocusIsOk] = useState(false);
  const { RoundNumber, setRoundNumber, setShowHeader } =
    useContext(pageNameContext);
  const nevigate = useNavigate();
  const title = `START ROUND ${RoundNumber}/4`;
  const explanation1 =
    "Starting from arms length, press play and then slowly bring device towards your nose. When it starts to feel uncomfortable or you see more than one dot click stop";
  const explanation2 =
    "Now while looking at the dot pull the device slowly away back to arms length. When at arms length, click start to do another round";

    useEffect(()=>{
      setShowHeader(false)
    },[])

useEffect(()=>{
  console.log("gggg")
  if(cameraPosX===null){
    nevigate("/train-focus/CalibrateCam")
    console.log("cameraPosX")
  } else{
    console.log("cameraPosX"+cameraPosX);
  }
},[])

  useEffect(() => {
    UmooveApi.API_loadUmooveLibrary() // 640, 480
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function startFunction() {
    let count = 0;
    UmooveApi.API_startUmoove();
    const interval = setInterval(() => {
      console.log(count);
      if (UmooveApi.API_getUmooveTracking()) {
        clearInterval(interval);
        setRoundNumber(RoundNumber + 1);
        nevigate("/train-focus/exercise");
      } else if (count < 50) {
        count++;
      } else {
        setPopup(true);
        count = 0;
        clearInterval(interval);
      }
    }, 10);
  }

  return (
    <div className="start-focus-page">
      {/* ------------------------------------------- popup!!*/}
      {popup === true ? (
        <div className={`overlay ${popup ? "" : "close"}`}>
          <div className="lookPopup ">
            {/* <div className="backpopup"> </div> */}
            <div className="title">I can't see you...</div>
            <div className="txt">Look in front the camera</div>
            <div className="btn.Popup">
              <button className="btn_yes" onClick={() => setPopup(false)}>
                OK
              </button>
              {/* <button className="btn_no" onClick={()=>{}}>
            No
          </button> */}
            </div>
          </div>
        </div>
      ) : null}
      {/* ------------------------------------------- */}
      {/* <div className="localLook" style={{ left: cameraPosX + "px" }}> */}
        <div className="purpleDotDot" style={{ left: cameraPosX + "px" }}></div>
        <div className="arrowToDot" style={{ left: cameraPosX + "px" }}></div>
        <div className="anderDotText" style={{ left: textCameraPosX + "px" }}>
          Focus on the dot above
        </div>
      {/* </div> */}
        <div className="around-video"><video className="focusVideo" ref={videoRef} autoPlay /></div>
      <FooterStart
        startFunction={startFunction}
        title={title}
        explanation={RoundNumber === 1 ? explanation1 : explanation2}
        img={Frame}
      />
    </div>
  );
}

export default StartFocus;
