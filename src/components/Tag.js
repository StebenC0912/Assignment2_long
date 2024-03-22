import { StyleSheet, Text, View } from "react-native";

export default function Tag(props) {
  const { tagName } = props;
  return (
    <View
      style={StyleSheet.create({
        flex: 1,
        backgroundColor: "#F7A026",
        width: "100%",
        marginHorizontal: 5,
        borderRadius: 16,
        marginVertical: 5,
      })}
    >
      <Text
        style={StyleSheet.create({
          textAlign: "center",
          color: "#fff",
          fontSize: 14,
          padding: 5,
        })}
      >
        {tagName}
      </Text>
    </View>
  );
}
