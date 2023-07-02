import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Entypo, Feather      } from "@expo/vector-icons";

const ScreenHeaderBtn = () => {
  return (
    <View style={styles.container}>
      {/* notifications */}
      <TouchableOpacity>
      <AntDesign name="hearto" size={24} color="black" />
      </TouchableOpacity>

      {/* messages */}
      <TouchableOpacity>
      <Feather name="message-circle" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ScreenHeaderBtn;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
        marginRight: 8,
    }
});
