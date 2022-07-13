import { useEffect, useState } from 'react';

/**
 * Allows to fetch datas when component is mounted
 *
 * @param {string} url
 *
 * @return data, loading and error
 * @author Guillaume
 * @version 1.0
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await url;
        setData(userData);
      } catch (err) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
};

export default useFetch;
