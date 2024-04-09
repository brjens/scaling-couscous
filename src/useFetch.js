import { useEffect, useState } from "react";
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
            return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            })
        }, 2000);
    }, [url]);
    return { data, loading, error };
}
 
export default useFetch;