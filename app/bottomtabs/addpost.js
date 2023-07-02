import { StyleSheet, Text, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library';
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native';
import PreviewSection from '../../components/addpostcomponents/PreviewSection';
import GallaryPhotosAll from '../../components/addpostcomponents/GallaryPhotosAll';
import { Stack } from 'expo-router';

const addpost = () => {
  const [gallaryPermission, setGallaryPermission] = useState();
  const [gallaryPhotos, setGallaryPhotos] = useState(null);
  const [gallaryAlbums, setGallaryAlbums] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  
  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setGallaryPermission(status === 'granted');
    })();
  }, [])


  useEffect(() => {
    (async () => {
      const albums = await MediaLibrary.getAlbumsAsync();
      const photos = await MediaLibrary.getAssetsAsync({album: albums[0].id, first: 20});
      console.log(albums)
      setGallaryAlbums(albums);
      setGallaryPhotos(photos?.assets);
    })();
  }, [gallaryPermission])

  if (gallaryPermission === undefined) {
    return <View><Text>Requestion Permission...</Text></View>
  } else if (!gallaryPermission) {
    return <View><Text>Permission Denied</Text></View>
  }

  if (!gallaryPhotos) {
    return <View><Text>Loading...</Text></View>
  }


  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{
        headerStyle: {},
        headerTitle: "",
        headerShadowVisible: false,
        headerLeft: () => (
          <View>

          <Text style={{color: "#000", fontSize: 20, fontWeight: "bold", marginLeft: 10}}>New Post</Text>
          </View>
        ),

      }} />
        <PreviewSection gallaryPhotos={gallaryPhotos[0]} selectedPhoto={selectedPhoto}/>
        <GallaryPhotosAll gallaryPhotos={gallaryPhotos} gallaryAlbums={gallaryAlbums} setSelectedPhoto={setSelectedPhoto} setGallaryAlbums={setGallaryAlbums}/>
    </SafeAreaView>
  )
}

export default addpost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
})