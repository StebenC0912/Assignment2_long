import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";

export default function FavoriteMealItem(props) {
  const { image, time, name, complexity, category, onPress } = props;
  return (
    <TouchableOpacity
      style={StyleSheet.create({
        flex: 1,
        color: color,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: color,
        paddingHorizontal: 10,
        paddingVertical: 40,
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 16,
      })}
      onPress={onPress}
    >
      <ImageBackground
        source={{ uri: image }}
        style={StyleSheet.create({
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
        })}
      />
      <Text>{name}</Text>
      <View>
        <Ionicons name="time-outline" size={20} color="white" />
        <Text>{category}</Text>
        <Text>{complexity}</Text>
        <Text>{time}</Text>
      </View>
      <Pressable>
        <Text>Remove</Text>
      </Pressable>
    </TouchableOpacity>
  );
}
