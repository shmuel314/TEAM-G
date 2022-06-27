
import styles from './style.module.css'


export default function FunctionBtn(props) {
  return (
    <>
      {props.name}
      if ({props.name} === "Weekly Assessment")
      {<div>`access in ${/* days left*/} days` </div>}

    </>
  );
}
