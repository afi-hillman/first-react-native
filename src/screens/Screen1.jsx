import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import JOB_DATA from "../../assets/job-directory-data.json";
import { fetchJobById } from "../components/utils/api";
import useFetchSingleJob from "../components/utils/hooks/useFetchSingleJob";
import useRefresh from "../components/utils/hooks/useRefresh";

const Screen1 = ({ route }) => {
  const {
    jobId,
    jobTitle,
    jobWorkplace,
    jobState,
    jobPosition,
    jobStack,
    jobDate,
  } = route?.params;
  const { data, fetchData } = useFetchSingleJob(jobId);
  console.log(data);
  const { refreshing, onRefresh } = useRefresh(fetchData);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ScrollView
        style={{ width: "100%" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>{jobId}</Text>
        <Text>{jobTitle}</Text>
        <Text>{jobWorkplace}</Text>
        <Text>{jobPosition}</Text>
        <Text>{jobState}</Text>
        <Text>{jobStack}</Text>
        <Text>{jobDate}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen1;
