export default function FunctionBtn(props){
    return <> 
    <div className="word">{props.name}</div>
    <div className="word">{props.name === "Weekly Assessment" && <div>`access in {countDays} days`</div>}</div>
    </>
  ;
  function countDays(){
    
  }
}
