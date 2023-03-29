import axios from "axios";
import React, { useDebugValue, useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const FetchUrl = () => setloading(true);
    axios.get(url).then((res) => {
      // console.log("res", res);
      setdata(res);
      setloading(false);
    });
    FetchUrl();
  }, [url]);
  // useDebugValue("debugFetchHook", data);

  return { data, loading };
}

export function usePostFetch(url, reqBody) {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const FetchUrl = () => setloading(true);
    // console.log("url", url, "reqbody", reqBody);

    reqBody == null
      ? null
      : axios.post(url, reqBody).then((res) => {
          res.data.success == false ? null : setdata(res);
          res.data.success == false ? setloading(true) : setloading(false);
        });
    FetchUrl();
  }, [url, reqBody]);
  // useDebugValue("debugFetchHook", data);

  return {};
}
