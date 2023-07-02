import { Image, StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { FlatList } from "react-native";
import { Stack } from "expo-router";
import { SelectList } from 'react-native-dropdown-select-list'
import SelectAlbumPage from "./SelectAlbumPage";
import { useNavigation } from "@react-navigation/native";


const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const GallaryPhotosAll = ({ gallaryPhotos, gallaryAlbums, setGallaryAlbums, setSelectedPhoto }) => {
    const navigation = useNavigation();
  const [selectedAlbum, setSelectedAlbum] = useState("Camera");
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {},
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />

      <FlatList
        data={gallaryPhotos}
        key={({item}) => item?.id+"#"+item?.filename}
        renderItem={({ item, index }) => (
            <Pressable onPress={() => setSelectedPhoto(item)}>
          <Image
            source={{ uri: item?.uri }}
            style={styles.gallaryImg}
            key={`${item?.id}#${item?.filename}`}
            />
            </Pressable>
        )}
        
        numColumns={4}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default GallaryPhotosAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 8,
  },
  gallaryImg: {
    width: deviceWidth / 4 - 4,
    height: deviceWidth / 4 - 4,
    resizeMode: "cover",
    borderColor: "#fff",
    borderWidth: 1,
  },
});
