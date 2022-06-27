import React, { createContext, useState } from 'react';
import Main from './Main';
<<<<<<< HEAD
import Login from './login';
=======
>>>>>>> fd47036ace3813e6d878c9b62cedbf280cad1ac3
export const pageNameContext = createContext();

export default function Layout() {
    const pageNameState = useState();
    const [userLoginInfo,setUserLoginInfo] = useState([])
    // user information is pushed through props to Main, while its state is pushed to Login.
    // This way, when a user performs login, a state is changed and the relevant area is rendered.
    // Use case in thie app: user avatar in the header, along with potential user menu

    return (
        <div className='Layout'>
            <pageNameContext.Provider value={pageNameState}>
                {/* <Login setUserLoginInfo={setUserLoginInfo}/> */}
                <Main userLoginInfo={userLoginInfo}/>
                <Login setUserLoginInfo={setUserLoginInfo}/>
            </pageNameContext.Provider>
        </div>
    )
}
