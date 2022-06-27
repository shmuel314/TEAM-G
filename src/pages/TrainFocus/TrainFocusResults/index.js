import { Link } from "react-router-dom";
import "./mosheModels.css";
import image from "./Resuil vector.png";
import img1 from "./Vector (1).png";
// Creator : Team G - Shmuel
function Results(props) {
  return (
    <>
      <img className="image" src={image} alt="img"></img>
      <div className="rectangle1"></div>
      <Link to="student/exercise">
        <button className="btn">Done</button>
      </Link>
    </>
  );
}

export default Results;
