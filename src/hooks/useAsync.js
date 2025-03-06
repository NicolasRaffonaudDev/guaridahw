import { useEffect, useState } from "react"

const useAsync = (asyncFunction, dependencies = [] ) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        (async () => {
            try {
                setLoading(true);
                const result = await asyncFunction();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
            })();
            }, dependencies);

    return {
        data,
        loading,
        error
    }
};

export default useAsync;