import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const StoryCards = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{width: 90, height: 90, display: "flex", justifyContent: "center", alignItems: "center"}}>
      <View style={styles.profile}>
        {!item?.storySeen && <View style={styles.notseen}></View>}
        <Image source={{"uri": item?.userPfp}} style={styles.img}/>
      </View>
      </View>
      <Text style={{fontSize: 12}}>{item.id == "1" ? "Your story" : item?.username}</Text>
    </View>
  );
};

export default StoryCards;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  profile: {
    width: 75,
    height: 75,
    backgroundColor: "lightgrey",
    borderRadius: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img:{
    width: "100%",
    height: "100%",
    borderRadius: 200/2,
    resizeMode: "cover",
  },
  notseen: {
    width: 85,
    height: 85,
    borderWidth: 3,
    borderColor: "coral",
    borderRadius: 200,
    position: "absolute",
  }
});
