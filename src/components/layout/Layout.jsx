import React, { createContext, useState } from 'react';
import Header from './header/Header';
import Main from './main/Main';
export const pageNameContext = createContext();

export default function Layout() {
    const pageNameState = useState();
    return (
        <div className='Layout'>
            <pageNameContext.Provider value={pageNameState}>
                <Main/>
            </pageNameContext.Provider>
        </div>
    )
}
