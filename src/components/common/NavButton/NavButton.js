import styles from "./style.module.css";

// Creator : Team A - Shahar.
export function NavButton(props) {
  return (
    <>
      <div>
        <span>{props.text}</span>
        <span>{props.icon}</span>
      </div>
    </>
  );
}
