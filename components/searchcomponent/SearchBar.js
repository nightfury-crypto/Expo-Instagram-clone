import { SafeAreaView, StyleSheet, Dimensions, TextInput } from "react-native";

const { width: deviceWidth } = Dimensions.get("window");

const SearchBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Search" style={styles.searchbar} />
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  searchbar: {
    width: "90%",
    height: 40,
    backgroundColor: "#faf6fa",
    borderRadius: 10,
    paddingLeft: 10,
  },
});
