import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native'
import {postData} from "../../tempdata/data"

const {width: deviceWidth, height: deviceHeight} = Dimensions.get("window")


const MyPosts = () => {
    
  return (
    <View style={styles.container}>
      <FlatList data={postData} 
      numColumns={3}
      renderItem={({item}) => <Postcarddisplay item={item}/>} scrollEnabled={false}/>
    </View>
  )
}

export default MyPosts

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
    }
})



const Postcarddisplay = ({item}) => {
    return (
        <View style={styles.imageView}>
            <Image source={{"uri" : item?.postImg}} style={styles.image} />
        </View>
    )
}