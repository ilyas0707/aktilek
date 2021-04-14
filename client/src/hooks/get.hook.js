import { useEffect, useState } from "react"
import { useHttp } from "./http.hook"

export const useGet = (url) => {

    const { loading, request } = useHttp()
    const [data, setData] = useState([])

    useEffect(() => {
        let mounted = true
        try {
            if (mounted) {
                request(`${url}/getAll`, "GET", null).then(result => {
                    setData(result)
                })
            }
        } catch (e) {}
        return () => mounted = false
    }, [request, url])

    return { data, loading }
}