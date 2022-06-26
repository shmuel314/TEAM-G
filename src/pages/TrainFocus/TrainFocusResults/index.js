import "./mosheModels.css";
import image from "./Resuil vector.png";
import img1 from "./Vector (1).png";
// Creator : Team G - Shmuel
function Results(props) {
  return (
    <>
      <img className="image" src={image} alt="img"></img>
      <div className="rectangle1"> </div>
      <div className="rectangle">
        <div className="box">
          <img id="mobile" src={img1}></img>
          <h5 className="text">Comfortable Near Point</h5>
        </div>
      </div>

      <button className="btn">Done</button>
    </>
  );
}

export default Results;
