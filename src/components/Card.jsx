import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { fetchJobById } from "./utils/api";

const Card = ({
  id,
  title = "No title given",
  workplace = "No workplace given",
  date = "No date given",
  state = "No state given",
  position = "Full time",
  stack = ["No stack given"],
}) => {
  const navigation = useNavigation();
  const handleNavigate = async () => {
    // const singleJob = await fetchJobById(job?.id);
    // console.log(singleJob);
    navigation.navigate("Page1", {
      jobId: id,
      jobTitle: title,
      jobWorkplace: workplace,
      jobDate: date,
      jobState: state,
      jobPosition: position,
      jobStack: stack,
    });
  };
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        width: 360,
        height: 218,
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#fff",
        margin: 8,
      }}
      // onPress={() => navigation.navigate("Job")}
      onPress={() => handleNavigate()}
      activeOpacity={0.7}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
      <Text style={{ fontSize: 14, color: "#888", marginTop: 4 }}>
        {workplace}
      </Text>
      <Text style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
        📅 Posted on {date}
      </Text>
      <Text style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
        📍 {state}
      </Text>
      <Text style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
        💼 {position}
      </Text>
      <View style={{ flexDirection: "row", marginTop: 6 }}>
        {stack.map((item, index) => (
          <View
            key={index}
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              paddingVertical: 2,
              paddingHorizontal: 4,
              marginRight: 4,
              backgroundColor: "#f0f0f0",
            }}
          >
            <Text style={{ fontSize: 12, color: "#888" }}>{item}</Text>
          </View>
        ))}
      </View>
      <Text style={{ fontSize: 12, color: "#888", marginTop: 12 }}>
        Added on {date}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
