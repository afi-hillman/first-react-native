import React, { useEffect, useState } from "react";
import { fetchAllJobs } from "../api";

const useFetchAllJobs = (deps = []) => {
  const [data, setData] = useState([]);
  const [fetchDataState, setFetchDataState] = useState("pending");
  const fetchData = async () => {
    try {
      console.log("fetching");
      setFetchDataState("loading");
      const data = await fetchAllJobs();
      setData(data);
      setFetchDataState("success");
    } catch (error) {
      console.error(error);
      setFetchDataState("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return { data, fetchDataState, fetchData };
};

export default useFetchAllJobs;
