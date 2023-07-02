import { FlatList, StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { tagsData } from "../../tempdata/data";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");
const PostTags = () => {
  if (!tagsData) {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No Tags yet.</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={tagsData}
        numColumns={3}
        renderItem={({ item }) => <Tagcarddisplay item={item} />}
        scrollEnabled={false}
      />
    </View>
  );
};

export default PostTags;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    flex: 1,
  },
  imageView: {
    width: deviceWidth / 3,
    height: deviceWidth / 3,
    borderWidth: 0.5,
    borderColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

const Tagcarddisplay = ({ item }) => {
  return (
    <View style={styles.imageView}>
      <Image source={{ uri: item?.postImg }} style={styles.image} />
    </View>
  );
};
