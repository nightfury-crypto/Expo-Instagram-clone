import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import DisplayPostProfile from "../../components/displayPosts/DisplayPostProfile";

const profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#fff" },
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{ paddingLeft: 11 }}>
              <Text style={{ fontSize: 19, fontWeight: "600" }}>
                @ig_toothless__
              </Text>
            </View>
          ),
          headerRight: () => (
            <Pressable style={{ paddingRight: 11 }}>
              <AntDesign name="setting" size={25} color="black" />
            </Pressable>
          ),
        }}
      />
      {/* header ends */}

      <ScrollView
        bounces={false}
        style={{ flex: 1, display: "flex", width: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* content */}
        <View style={styles.topWrap}>

        {/* top */}
        <View style={styles.top}>
          <View style={styles.profilePic}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1688091789~exp=1688092389~hmac=269856f8c9b755528c0f2aa969a0f4ba034f9c51409fdd12b2e6ce06c6d6d7d7",
              }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 90 / 2,
                resizeMode: "contain",
              }}
            />
          </View>
          <View style={styles.profileInfo}>
            <View style={[styles.postsNum, styles.bars]}>
              <Text style={{ fontWeight: "800", fontSize: 18 }}>0</Text>
              <Text style={{ fontSize: 15 }}>Posts</Text>
            </View>
            <View style={[styles.followersNum, styles.bars]}>
              <Text style={{ fontWeight: "800", fontSize: 18 }}>60</Text>
              <Text style={{ fontSize: 15 }}>Followers</Text>
            </View>
            <View style={[styles.followingNum, styles.bars]}>
              <Text style={{ fontWeight: "800", fontSize: 18 }}>12</Text>
              <Text style={{ fontSize: 15 }}>Following</Text>
            </View>
          </View>
        </View>
        {/* top ends */}

        {/* middle */}
        <View style={{ padding: 11 }}>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>
            Karnail Singh Choudhary
          </Text>
          <Text style={{ fontSize: 15 }} numberOfLines={5}>
            {`Indian
Web Developer
React Native Developer`}
          </Text>

          <View style={styles.btnView}>
            <Pressable style={styles.btn}>
              <Text style={{ color: "#fff", fontWeight: "500", fontSize: 15 }}>
                Edit
              </Text>
            </Pressable>

            <Pressable style={styles.btn}>
              <Text style={{ color: "#fff", fontWeight: "500", fontSize: 15 }}>
                Share Profile
              </Text>
            </Pressable>
          </View>
        </View>
        {/* middle ends */}
        </View>
        <View style={styles.displayposts}>
          <DisplayPostProfile />
          </View>

        {/* content ends */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
  },
  topWrap: {
    width: "100%",
    display: "flex",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 11,
    width: "100%",
    marginTop: 11,
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.75,
  },
  bars: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  followingNum: {
    paddingRight: 11,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 11,
    gap: 16,
  },
  btn: {
    backgroundColor: "rgb(39, 39, 39)",
    width: "48%",
    flex: 0.5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
  },
  displayposts: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
