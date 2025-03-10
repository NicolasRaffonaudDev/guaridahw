import { useEffect, useState } from "react"

const useAsync = (asyncFunction, dependencies = [] ) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        let isMounted = true;
        (async () => {
            try {
                setLoading(true);
                const result = await asyncFunction();
                if (isMounted)
                    setData(result); // Solo actualiza si el componente está montado
            } catch (error) {
                if (isMounted)
                    setError(error);
            } finally {
                if (isMounted)
                    setLoading(false);
            }
            })();
            return () => { isMounted = false }; //Cleanup
            }, [...dependencies]);

    return {
        data,
        loading,
        error
    };
};

export default useAsync;