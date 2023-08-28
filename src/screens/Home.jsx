import { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, ScrollView, Text, View } from "react-native";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import JOB_DATA from "../../assets/job-directory-data.json";
import Header from "../components/Header";
import Card from "../components/Card";
import { useRoute } from "@react-navigation/native";
import { fetchAllJobs } from "../components/utils/api";
import useFetchAllJobs from "../components/utils/hooks/useFetchAllJobs";

const Home = ({ navigation }) => {
  const { data, fetchData } = useFetchAllJobs();

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
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <ScrollView style={{ width: "100%" }}>
        <Header></Header>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#dbdbdb",
              gap: 12,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 36,
                textAlign: "center",
                padding: 10,
              }}
            >
              Find Tech Jobs in Malaysia MY
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                paddingHorizontal: 20,
                color: "gray",
              }}
            >
              Let employers find you, or apply to companies directly.
            </Text>
            <Button
              style={{
                backgroundColor: "#000000",
                color: "#FFFFFF",
                fontSize: 20,
                borderRadius: 4,
              }}
            >
              🎯 I want companies to find me
            </Button>
            <Button
              style={{
                backgroundColor: "#FFFFFF",
                color: "#333",
                fontSize: 20,
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: "#e2e8f0",
              }}
            >
              🔍 Search Jobs
            </Button>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, padding: 10 }}>
              ⏳ Latest Jobs
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {JOB_DATA.map((element, index) => {
            return (
              <Card
                key={index}
                id={element.id}
                title={element.job}
                workplace={element.company}
                description={element.details.job_description[0]}
                date={element.post_date}
                state={element.company_state}
                stack={element.stacks}
              />
            );
          })}
        </View>
      </ScrollView> */}
      <ScrollView
        style={{ width: "100%" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header />
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#dbdbdb",
              gap: 12,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 36,
                textAlign: "center",
                padding: 10,
              }}
            >
              Find Tech Jobs in Malaysia MY
            </Text>
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                paddingHorizontal: 20,
                color: "gray",
              }}
            >
              Let employers find you, or apply to companies directly.
            </Text>
            <Button
              style={{
                backgroundColor: "#000000",
                color: "#FFFFFF",
                fontSize: 20,
                borderRadius: 4,
              }}
            >
              🎯 I want companies to find me
            </Button>
            <Button
              style={{
                backgroundColor: "#FFFFFF",
                color: "#333",
                fontSize: 20,
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: "#e2e8f0",
              }}
            >
              🔍 Search Jobs
            </Button>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, padding: 10 }}>
              ⏳ Latest Jobs
            </Text>
          </View>
        </View>
        <FlatList
          style={{ width: "100%" }}
          data={data}
          scrollEnabled={false}
          renderItem={({ item }) => <JobCard job={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const JobCard = ({ job, navigation }) => {
  return (
    <Card
      id={job.id}
      title={job.job}
      workplace={job.company}
      description={job.details.job_description[0]}
      date={job.post_date}
      state={job.company_state}
      stack={job.stacks}
    />
  );
};
export default Home;
