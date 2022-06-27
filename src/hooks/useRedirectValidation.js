import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

// Creator : Team F - Asael

// MOCK FETCH
const myFetch = (url) => {
    return Promise((resolve, reject) => {
        setTimeout(() => resolve({ didTest: false }), 200);
    })
}
// ------



export const useRedirectValidation = (url, navigateTo) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const Navigate = useNavigate()


    useEffect(() => {
        async function getData() {
            setLoading(true)
            const res = await myFetch(url)
            setData(res)
            setLoading(false)
            // check if data is not null or empty
            if (data == false) {
                navigateTo = Navigate('/Instructions')
                // if it is empty then navigate to navigateTo
            }
        }
    }, [])
}
