import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/config";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}${url}`);

        if (!res.ok) {
          setError("failed to fetch");
        }
        const result = await res.json();
        console.log(result, "Result");

        setData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
