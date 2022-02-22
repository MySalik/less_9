import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [hasError, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchList = async () => {
            const response = await fetch(url)
            if (!response.ok) {
                setError(response.status)
                setLoading(false)
                throw new Error(response.statusText)
            }
            const json = await response.json()
            setData(json)
            setLoading(false)
        }
        fetchList();
    },[url])

    return [{
        "data": data,
        "error": hasError,
        "loading": isLoading
    }]
}


export default useFetch;