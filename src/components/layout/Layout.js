import React, { createContext, useState } from 'react';
import Main from './Main';
import Login from './login';

export const pageNameContext = createContext()

//group c- yoav & yehoshua 

export default function Layout() {
    const [pageName, setPageName] = useState("||||| default page name |||||");
    const [ShowHeader , setShowHeader] = useState(true)
    const [userLoginInfo,setUserLoginInfo] = useState([])
    const [RoundNumber, setRoundNumber] = useState(1)
    const [DailyStoppingDistance, setDailyStoppingDistance] = useState(0)

    // user information is pushed through props to Main, while its state is pushed to Login.
    // This way, when a user performs login, a state is changed and the relevant area is rendered.
    // Use case in thie app: user avatar in the header, along with potential user menu

    return (
        <div className='Layout'>
            <pageNameContext.Provider value={{ShowHeader , setShowHeader, pageName, setPageName,RoundNumber, setRoundNumber,DailyStoppingDistance, setDailyStoppingDistance}}>
                {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
                <Main userLoginInfo={userLoginInfo}/>
                {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
            </pageNameContext.Provider>
        </div>
    )
}
