import React, { useEffect, useState } from "react";
import { fetchJobById } from "../api";

const useFetchSingleJob = (id) => {
  const [data, setData] = useState([]);
  const [fetchDataState, setFetchDataState] = useState("pending");
  const fetchData = async () => {
    try {
      console.log("fetching");
      setFetchDataState("loading");
      const data = await fetchJobById(id);
      setData(data);
      setFetchDataState("success");
    } catch (error) {
      console.error(error);
      setFetchDataState("error");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return { data, fetchDataState, fetchData };
};

export default useFetchSingleJob;
