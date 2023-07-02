import {
    Dimensions,
    SafeAreaView,
    View,
    ScrollView,
    StyleSheet,
    FlatList,
  } from "react-native";
  import { Stack, useRouter } from "expo-router";
  import ScreenHeaderBtn from "../components/header/ScreenHeaderBtn";
  import LogoIcon from "../components/header/LogoIcon";
  import StoryCards from "../components/storycard/StoryCards";
  import PostCard from "../components/post/PostCard";
  
  const {width: deviceWidth, height: deviceHeight} = Dimensions.get("window")
  
  export default function Home() {
    const route = useRouter();
    const storiesData = [1, 2, , 3, 4, 5, 6];
    return (
      <SafeAreaView style={styles.container}>
        {/* header */}
        <Stack.Screen
          options={{
            headerStyle: {},
            headerTitle: "",
            headerShadowVisible: false,
            headerLeft: () => (
              <LogoIcon
                iconUrl={
                  "https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-3.jpg"
                }
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={
                  "https://www.iconspng.com/uploads/hamburger-menu-icon/hamburger-menu-icon.png"
                }
              />
            ),
          }}
        />
        {/* header ends */}
  
        {/* content */}
        <ScrollView style={{ backgroundColor: "#fff" }} bounces={false}>
          {/* stories */}
          <View style={{ width: "100%", paddingHorizontal: 8, paddingTop: 15 }}>
            <FlatList
              data={storiesData}
              renderItem={() => <StoryCards />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 9 }}
            />
          </View>
          {/* stories */}
          <View style={styles.posts}>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flex: 1,
    },
    posts: {
      marginTop: 30,
      width: "100%",
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  });
  