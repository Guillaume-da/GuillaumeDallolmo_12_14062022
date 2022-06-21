import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
              const userData = await url
              setData(userData)
            } catch (err) {
              setError(true)
              console.log(error)
            } finally {
              setLoading(false)
            }
          }
        getUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {data, loading, error}
}

export default useFetch