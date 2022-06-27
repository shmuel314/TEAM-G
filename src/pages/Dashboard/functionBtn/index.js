export default function FunctionBtn(props) {
  switch (props.name) {
    case "Train Reading":
      <button className="word">
        <div className="iconReading">{props.icon}</div>
        {props.name}
      </button>;
      break;
    case "Train Focus":
      <button className="word">
        <div className="iconFocus">{props.icon}</div>
        {props.name}
      </button>;
      break;
    case "Weekly Assessment":
      <button className="word">
        <div className="lockIcon">{props.lock}</div>
        <div className="iconWeekly">{props.icon}</div>
        {props.name}
        <div className="word">`access in 2 days`</div>
      </button>;
      break;
    case "Freestyle":
      <button className="word">
        <div className="iconFfreestyle">{props.icon}</div>
        {props.name}
      </button>;
      break;
  }

  function countDays(props) {}
}
