import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
export default function FavoriteMealItem(props) {
  const { image, time, name, complexity, category , onPress} = props;
 
  return (
    <View
      style={StyleSheet.create({
        flex: 1,
        width: "100%",
        borderRadius: 8,
        alignContent: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 20,
      })}
    >
      <TouchableOpacity
        style={StyleSheet.create({
          flex: 1,
          width: "100%",
        })}
      >
        <ImageBackground
          source={{ uri: image }}
          style={{
            resizeMode: "contain",
            height: 358,
            width: "100%",
          }}
          imageStyle={{ borderRadius: 8 }}
        >
          <LinearGradient
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]}
            style={StyleSheet.create({
              height: "100%",
              width: "100%",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              padding: 10,
              borderRadius: 8,
            })}
          >
            <Text
              style={StyleSheet.create({
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 15,
              })}
            >
              {name}
            </Text>
            <View
              style={StyleSheet.create({
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                marginBottom : 10,
              })}
            >
              <Ionicons
                name="time-outline"
                size={24}
                color="white"
                style={StyleSheet.create({
                  marginRight: 10,
                })}
              />
              
              <Text style={styles.textDetail}>{time} mins</Text>
              <Text style={styles.textDetail}>{complexity}</Text>
              {category.map((category, index) => (
                <Text key={index} style={styles.textDetail}>
                  {category}
                </Text>
              ))}
            </View>
            <Pressable
              style={StyleSheet.create({
                backgroundColor: "white",
                padding: 10,
                borderRadius: 8,
                alignSelf: 'stretch',
                alignItems: 'center',
              })}
              onPress={onPress}
            >
              <Text style={StyleSheet.create({
                color: "#F54242",
                fontSize: 16,
                fontWeight: "bold",
              })}>Remove</Text>      
            </Pressable>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textDetail: {
    color: "white",
    fontSize: 14,
    marginRight: 10,
    fontWeight: "400",
  },
});
