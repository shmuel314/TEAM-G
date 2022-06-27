import FooterStart from "../../../components/common/FooterStart";
import "./style.css";
// import StartComponent from "../index";

function StartFocus() {
  let roundNum = 1;
  const title = `START ROUND ${roundNum}/4`;
  const explanation =
    "Starting from arms length, press play and then slowly bring device towards your nose. When it starts to feel uncomfortable or you see more than one dot click stop";
  function startFunction() {
    console.log("start");
  };
    const route = "/train-focus/exercise"


  return (
    <div>
      <div className="localLook">
        <div className="dot"></div>
        <div className="arrow"></div>
        <div className="anderDotText">
          <p>Focus on the point above</p>
        </div>
      </div>

      <FooterStart
        startFunction={startFunction}
        title={title}
        explanation={explanation}
        route = {route}
      />
    </div>
  );
}

export default StartFocus;