<<<<<<< HEAD

=======
>>>>>>> fd47036ace3813e6d878c9b62cedbf280cad1ac3
import styles from './style.module.css'


export default function FunctionBtn(props) {
  return (
    <>
<<<<<<< HEAD
      {props.name}
      if ({props.name} === "Weekly Assessment")
      {<div>`access in ${/* days left*/} days` </div>}

=======
      <div className={`${styles.word}`}>{props.name}</div>
      {props.name === "Weekly Assessment" && (
        <div className={`${styles.word}`}>`access in {/* days left*/} days`</div>
      )}
>>>>>>> fd47036ace3813e6d878c9b62cedbf280cad1ac3
    </>
  );
}
