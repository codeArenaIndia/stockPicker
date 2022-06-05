import { useEffect, useState} from 'react';
import { fetchDetail } from '../api/fetch';

const useFetch = (fn, symbol, delay) => {
  const [data, setData] = useState({noData : false, apiData : {}});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let intervalId;
    const fetchStockDetail = () => {
        setLoading(true);
        fetchDetail(fn, symbol).then(data => {
            const res = data.data;
            if (Object.keys(res).length !== 0) {
              setData({noData : false, apiData : res})
            } else {
              clearInterval(intervalId)
              setData({noData : true, apiData : res})
            }
            setLoading(false);
          }).catch(error => {
            setError(error.message);
            setLoading(false);
            clearInterval(intervalId)
          })
    }
    fetchStockDetail();
   
    if (delay) {
      intervalId = setInterval(() => {
        fetchStockDetail()
      }, delay);
    }

    return () => clearInterval(intervalId)
  }, [symbol, fn]);


  return {
    data,
    loading,
    error
  }
}
export default useFetch;