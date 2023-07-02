import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import formatter from "../../utils/integerformat";

const PostCard = ({ item }) => {
  const [likesTotal, setLikesTotal] = useState(0);
  const [commentsTotal, setCommentsTotal] = useState(0);

  useEffect(() => {
    // convert the likes into friendly format 
    setLikesTotal(formatter.format(item?.likes));
    setCommentsTotal(formatter.format(item?.comments));
  }, [item?.likes, item?.comments]);

  return (
    <View style={styles.container}>
      {/* top */}
      <View style={styles.top}>
        <View style={styles.profileImageView}>
          <Image
            source={{
              uri: item?.userPfp,
            }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.topTextView}>
          <Text style={{ fontSize: 14, fontWeight: "800" }}>
            {item?.username}
          </Text>
          <Text
            style={{ color: "rgb(39, 39, 39)", fontSize: 12, marginTop: -4 }}
          >
            jammu & kashmir
          </Text>
        </View>
      </View>
      {/* top ends here */}

      {/* image */}
      <View style={styles.postImgView}>
        <Image
          source={{
            uri: item?.postImg,
          }}
          style={styles.postImg}
        />
      </View>
      {/* image ends here */}
      {/* bottom */}
      <View style={styles.bottom}>
        {/* functions like, comment, share */}
        <View style={styles.functions}>
          <View style={styles.functionsLeft}>
            {/* like */}
            <TouchableOpacity>
              <AntDesign name="heart" size={24} color="crimson" />
            </TouchableOpacity>

            {/* comment */}
            <TouchableOpacity>
              <AntDesign name="message1" size={24} color="rgb(89, 89, 89)" />
            </TouchableOpacity>

            {/* share */}
            <TouchableOpacity>
              <AntDesign name="sharealt" size={24} color="rgb(89, 89, 89)" />
            </TouchableOpacity>
          </View>

          <View style={styles.functionsRight}>
            <TouchableOpacity>
              <AntDesign name="download" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* texts */}
        <View style={styles.textGroupView}>
          <Text
            style={{ color: "black", fontWeight: "800", fontSize: 14 }}
          >{`${likesTotal} likes`}</Text>
          <Text numberOfLines={2} ellipsizeMode="tail">
            <Text style={{ fontSize: 15, fontWeight: "900" }}>
              {item?.username}
            </Text>
            <Text style={{ color: "rgb(29, 29, 29)", fontSize: 15 }}   >
              {item?.caption}
            </Text>
          </Text>
        </View>

        {/* view all comments */}
        <View style={styles.allcomments}>
          <Pressable>
            <Text
              style={{ color: "grey" }}
            >{`View all ${commentsTotal} comments`}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // padding: 10,
    marginTop: 15,
    marginBottom: 10,
  },
  top: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    paddingHorizontal: 6,
  },
  profileImageView: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  topTextView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  postImgView: {
    width: "100%",
    flex: 1,
    marginTop: 9,
  },
  postImg: {
    width: "100%",
    resizeMode: "cover",
    height: 300,
    backgroundColor: "black",
  },
  bottom: {
    display: "flex",
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 6,
  },
  functions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 6,
  },
  functionsLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  functionsRight: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  caption: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  textGroupView: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 2,
    marginTop: 10,
    paddingHorizontal: 6,
  },
  allcomments: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 8,
    marginTop: 3,
  },
});
