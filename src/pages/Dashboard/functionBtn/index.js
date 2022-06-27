import { useEffect } from "react";

export default function FunctionBtn(props) {
  useEffect(() => {
    let count = countDays()
  },[])

  switch (props.name) {
    case "Train Reading":
      <div type="button" className="word">
        <div className="iconReading">{props.icon}</div>
        {props.name}
      </div>;
      break;
    case "Train Focus":
      <div type="button" className="word">
        <div className="iconFocus">{props.icon}</div>
        {props.name}
      </div>;
      break;
    case "Weekly Assessment":
      <div type="button" className="word">
        <div className="lockIcon">{props.lock}</div>
        <div className="iconWeekly">{props.icon}</div>
        {props.name}
        <div className="word">`access in {result.days} days`</div>
      </div>;
      break;
    case "Freestyle":
      <div type="button" className="word">
        <div className="iconFfreestyle">{props.icon}</div>
        {props.name}
      </div>;
      break;
  }

  async function countDays() {
    let lastTest = await fetch();
    let currentTime = new Date();
    let res = Math.floor((currentTime - lastTest) / (24 * 3600 * 1000));
    let result = {
      days : res,
      readyToTest : false
    }
    if (res >= 7) result.readyToTest = true;
    return result;
  }
}
