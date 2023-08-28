import React, { useCallback, useState } from "react";

const useRefresh = (fetchData) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      await fetchData();
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  }, [fetchData]);
  return { refreshing, onRefresh, setRefreshing };
};

export default useRefresh;
