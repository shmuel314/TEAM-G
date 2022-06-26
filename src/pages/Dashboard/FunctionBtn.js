<<<<<<< HEAD
export default function FunctionBtn(props){
    return <> 
    {props.name}
    {props.name === "Weekly Assessment" && <div>`access in {/* days left*/} days`</div>}
=======
import styles from './style.module.css'
export default function FunctionBtn(props) {
  return (
    <>
      <div className={`${styles.word}`}>{props.name}</div>
      {props.name === "Weekly Assessment" && (
        <div className={`${styles.word}`}>`access in {/* days left*/} days`</div>
      )}
>>>>>>> acb85112ee1cd6fedff7f73084d2181899fbf66e
    </>
  );
}
