import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyPosts from './MyPosts';
import { Entypo, MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons';
import PostTags from './PostTags';
const Tab = createMaterialTopTabNavigator();

const DisplayPostProfile = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarShowLabel: false,
        tabBarPressColor: "#b5d1ff",
        tabBarIndicatorStyle: {
            backgroundColor: "#0070a8",
        },
        swipeEnabled: true,
    }}>
      <Tab.Screen name="myposts" component={MyPosts} options={{
        tabBarIcon: ({focused}) => <MaterialCommunityIcons name="grid" size={26} color={focused? "#0070a8": "grey"} />,

      }} />
      <Tab.Screen name="tags" component={PostTags} options={{
        tabBarIcon: ({focused}) => <AntDesign name="tagso" size={26} color={focused? "#0070a8": "grey"} />,
      }} />
    </Tab.Navigator>
  )
}

export default DisplayPostProfile

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        padding: 11,
    },
})