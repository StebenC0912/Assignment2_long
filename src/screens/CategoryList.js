import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import ItemList from "../components/ItemList";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoryList() {
  const data = CATEGORIES;
  const handleCategoryClick = (category) => {
    console.log("Category clicked: ", category);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/Header.png")}
          style={styles.headerImage}
        ></Image>
        <View
          style={StyleSheet.create({
            flex: 1,
            width: "100%",
            alignContent: "center",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: "white",
            marginTop: -10,
          })}
        >
          <Text
            style={StyleSheet.create({
              paddingTop: 20,
              fontSize: 22,
              fontWeight: "semibold",
            })}
          >
            Category
          </Text>
          <FlatList
            style={StyleSheet.create({
              width: "100%",
              borderRadius: 16,
            })}
            data={data}
            renderItem={({ item }) => (
              <ItemList
                category={item.title}
                color={item.color}
                onPress={() => handleCategoryClick(item.title)}
              />
            )}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: "100%",
    height: 357,
  },
});
