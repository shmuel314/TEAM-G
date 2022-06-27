import styles from "./style.module.css";
import Result from "./Result.svg";
import RatingAndScore from "../../../components/Common/ReatingAndScore";
// Creator : Team A - Efart
function Page6() {
  return (
    <>
      <img src={Result} alt="" />
      <RatingAndScore />
      <button>Go to Dashboard</button>
    </>
  );
}

export default Page6;
