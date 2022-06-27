import "./style.css";

export default function SubmitBtn(props) {
  return (
    <div className="submit">
      <button type="button" className="word" onClick={props.onClick}
        >
        submit
      </button>
    </div>
  );
}
