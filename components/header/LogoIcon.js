import { StyleSheet, Image, View } from 'react-native'
import { logo } from "../../constants/images"

const LogoIcon = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}/>
    </View>
  )
}

export default LogoIcon;

const styles = StyleSheet.create({
    container: {
        width: 135,
        height: 50,
    },
    image: {
        width: "100%",
        height: 50,
        resizeMode: "contain"
    }
})