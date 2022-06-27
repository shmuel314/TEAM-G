import "./style.css";

export default function SubmitBtn(props) {
  return (
    <div className="submit">
      <div type="button">
  <div className="word">{props.name}</div>
      </div>
    </div>
  );
}
