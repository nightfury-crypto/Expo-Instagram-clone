import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { postData } from '../../tempdata/data'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBar from '../../components/searchcomponent/SearchBar'

const {width: deviceWidth, height: deviceHeight} = Dimensions.get("window")

const search = () => {
  return (
<SafeAreaView style={styles.container}>
      <Stack.Screen options={{
        headerStyle: {},
        headerTitle: "",
        headerShadowVisible: false,
        headerLeft: () => (
          <SearchBar />
        )
      }} />
      <ScrollView bounces={false} style={{width: "100%", flex: 1}} contentContainerStyle={{flexGrow: 1}}>

      <FlatList data={postData} 
      numColumns={3}
      bounces={false}
      scrollEnabled={false} 
      renderItem={({item}) => <Image source={{"uri": item?.postImg}} style={styles.savedimg} />}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default search

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