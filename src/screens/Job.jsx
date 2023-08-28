import React, { useContext } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native"; // Import the useRoute hook
import Header from "../components/Header";
import Button from "../components/Button";
import JOB_DATA from "../../assets/job-directory-data.json";

const Job = ({ route, navigation }) => {
  const data = JSON.stringify(JOB_DATA);

  return (
    <ScrollView>
      <View>
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};

export default Job;
