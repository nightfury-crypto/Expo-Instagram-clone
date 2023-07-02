import {
  Dimensions,
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  VirtualizedList,
  Pressable,
} from "react-native";
import { Stack, Link, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../components/header/ScreenHeaderBtn";
import LogoIcon from "../../components/header/LogoIcon";
import StoryCards from "../../components/storycard/StoryCards";
import PostCard from "../../components/post/PostCard";
import { postData, storiesData } from "../../tempdata/data";
import StoryPage from "../story/[StoryId]";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export default function Home() {
  const router = useRouter();
  const handleStoryView = (item) => {
    router.push(`../story/${item.id}`);
  };
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
      <ScrollView bounces={false}>
        {/* content */}
        <View style={{ backgroundColor: "#fff", flex: 1 }} bounces={false}>
          {/* stories */}
          <View style={{ width: "100%", paddingHorizontal: 8, paddingTop: 15 }}>
            <FlatList
              data={storiesData}
              renderItem={({ item, index }) => (
                <Link href={`../story/${item?.id}`}>
                  <StoryCards item={item} />
                </Link>
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 9 }}
            />
          </View>
          {/* stories ends */}
          {/* posts */}
          <FlatList
            data={postData}
            renderItem={({ item }) => <PostCard item={item} />}
            keyExtractor={(item) => item.id}
            initialNumToRender={6}
            scrollEnabled={false}
            bounces={false}
          />
        </View>
      </ScrollView>
      {/* content ends */}
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
  },
});
