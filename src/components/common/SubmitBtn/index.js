import "./style.css";
import {Link} from "react-router-dom"
export default function SubmitBtn(props) {
  return (
    <div className="submit">
     <Link to={props.path} > <div type="button">
        <div className="word">{props.name}</div>
      </div></Link>
    </div>
  );
}
