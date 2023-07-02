import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { storiesData } from "../../tempdata/data";

const StoryPage = () => {
  const [storyToShowData, setStoryToShowData] = useState(null);
  const { StoryId } = useSearchParams();

  useEffect(() => {
    if (StoryId) {
      const data = storiesData
        ?.filter((check) => check?.id.toString() == StoryId.toString())
        .map((item) => {
          return item;
        });
      setStoryToShowData(data[0]);
    }
  }, [StoryId]);

  if (!storyToShowData) {
    return <Text>Loading..</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTitle: "",
          headerShadowVisible: false,
          headerBackButtonMenuEnabled: true,
          headerTintColor: "#fff",
          headerBackVisible: true,
          headerRight: () => (
            <View style={styles.top}>
            <View style={styles.profileImageView}>
              <Image
                source={{
                  uri: storyToShowData?.userPfp,
                }}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.topTextView}>
              <Text style={{ fontSize: 15, fontWeight: "800", color: "#fff" }}>
                {storyToShowData?.username}
              </Text>
            </View>
            <Text style={{ fontSize: 13, fontWeight: "400", color: "#f5f5f5" }}>
                {storyToShowData?.storyTime}
            </Text>
          </View>
          ),
        }}
      />
      <View style={styles.storyWrap}>
      <Image source={{ uri: storyToShowData?.storyImg }} style={styles.img} />
      </View>
    </SafeAreaView>
  );
};

export default StoryPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "black",
  },
  storyWrap: {
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    paddingHorizontal: 8,
    width: "90%"
  },
  profileImageView: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  topTextView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
