export default function FunctionBtn(props){
    return <> 
    {props.name}
    {props.name === "Weekly Assessment" && <div>`access in {/* days left*/} days`</div>}
    </>
}