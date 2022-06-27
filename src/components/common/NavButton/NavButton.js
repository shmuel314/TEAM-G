import styles from "./style.module.css";

// Creator : Team A - Shahar.
export function NavButton(props) {
  return (
    <>
      <div>
        <span></span>
        <span>
          {props.icon}
          {props.text}
        </span>
      </div>
    </>
  );
}
