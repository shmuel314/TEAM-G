import "./style.css";
import { Link } from "react-router-dom";

// Shira from Team G - Shmuel

// יש לשלוח לקומפוננטה הזו:
//props.route  ----> להכניס את הראוט אליו הלינק צריך ללכת
// props.startFunction   --->הפונקציה שתפעל בעת לחיצה על הכפתור, היא צריכה להעביר לדף הבא
//props.title
//props.explanation
//props.img

function FooterStart(props) {
  return (
    <div className="myBottomStart">
      <div className="outBtn">
      <Link to={props.route}>  <button
          className="startBtnFocous"
          onClick={props.startFunction}
        >
          <div className="playTriangle"></div>
        </button></Link>
      </div>
      <div className="footer-start-box">
        <div className="startTitle">{props.title}</div>
        <div className="explanation">
          <p>
            {props.explanation}
          </p>
        </div>
        <div className="myEmoji">
          <img src={props.img}></img>
        </div>
      </div>
    </div>
  );
}

export default FooterStart;