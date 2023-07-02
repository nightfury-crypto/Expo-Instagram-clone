import { Tabs } from "expo-router";
import { AntDesign, Fontisto, Octicons  } from "@expo/vector-icons";

export default () => {
  const ICONSIZE = 28;
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#fff",
          height: 54,
          elevation: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({focused}) => <AntDesign name="home" size={ICONSIZE} color={focused ? "#0070a8" : "grey"} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({focused}) => (
                <AntDesign name="search1" size={ICONSIZE} color={focused ? "#0070a8" : "grey"} />
          ),
        }}
      />

      <Tabs.Screen
        name="addpost"
        options={{
          tabBarIcon: ({focused}) => (
                <AntDesign name="pluscircle" size={34} color={focused ? "#0070a8" : "black"} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({focused}) => (
            <Octicons name="bookmark" size={ICONSIZE} color={focused ? "#0070a8" : "grey"} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <Userprofileicon />,
        }}
      />
    </Tabs>
  );
};

import { Image, View } from "react-native";

const Userprofileicon = () => {
  return (
    <Image
      source={{ uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1688091789~exp=1688092389~hmac=269856f8c9b755528c0f2aa969a0f4ba034f9c51409fdd12b2e6ce06c6d6d7d7" }}
      style={{ width: 30, height: 30, resizeMode: "contain", borderRadius: 30/2 }}
    />
  );
};
