import { Image, StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { postData } from '../../tempdata/data'
import { Stack } from 'expo-router'


const {width: deviceWidth, height: deviceHeight} = Dimensions.get("window")
const saved = () => {
  const data = null
  if (!data) {
    return (
      <View style={styles.container}>
        <Text>No Saved Posts</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{
        headerStyle: {},
        headerTitle: "",
        headerShadowVisible: false,
        headerLeft: () => (
          <Text style={{marginLeft: 20, fontSize: 20, fontWeight: "bold"}}>Saved posts</Text>
        )
      }} />
      <FlatList data={postData} numColumns={3} renderItem={({item}) => <Image source={{"uri": item?.postImg}} style={styles.savedimg} />}/>
    </SafeAreaView>
  )
}

export default saved

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  savedimg: {
    width: deviceWidth / 3,
    height: deviceWidth / 3,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#fff",
  }
})