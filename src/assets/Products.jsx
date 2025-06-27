import { useEffect, useState } from "react";
import axios from "axios";
export function useFetch(url) {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data.users));
  }, [url]);

  return data;
}
export default useFetch;
