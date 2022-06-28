import UseRedirectValidation from "../../hooks/useRedirectValidation"



// Creator : Team F - Asael


function Dashboard() {
    const res = UseRedirectValidation("url", "navto") // hook for check if user did test


    return (<div>
        Dashboard
    </div>
    )
}


export default Dashboard