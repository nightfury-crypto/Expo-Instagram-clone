import { Image, Pressable } from "react-native";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ImageEditor } from "expo-image-editor";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const PreviewSection = ({gallaryPhotos, selectedPhoto}) => {
  const [editorVisible, setEditorVisible] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [imageData, setImageData] = useState(null);
  const launchEditor = (uri) => {
    if(uri) {
    // Then set the image uri
    setImageUri(uri);
    // And set the image editor to be visible
    setEditorVisible(true);
    }
  };

  useEffect(() => {
    if (selectedPhoto) {
      setImageData(null)
    }
  }, [selectedPhoto]);

  if(editorVisible) {
    return (
      <ImageEditor
        visible={editorVisible}
        onCloseEditor={() => setEditorVisible(false)}
        imageUri={selectedPhoto? selectedPhoto?.uri : gallaryPhotos?.uri}
        fixedCropAspectRatio={16 / 9}
        lockAspectRatio={false}
        minimumCropDimensions={{
          width: 100,
          height: 100,
        }}
        onEditingComplete={(result) => {
          setImageData(result);
        }}
        mode="full"
      />
    )
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          "uri": imageData? imageData?.uri : selectedPhoto ? selectedPhoto?.uri : gallaryPhotos?.uri ,
        }}
        style={styles.previewImg}
      />
      <Pressable onPress={() => launchEditor(selectedPhoto?.uri || gallaryPhotos?.uri || imageData?.uri)} style={styles.editBtn}>
      <AntDesign name="edit" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default PreviewSection;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 80,
    height: deviceWidth - 80,
  },
  previewImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",  
  },
  editBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    margin: 8,
    elevation: 5,
  }
});
