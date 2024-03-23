import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import ItemList from "../components/ItemList";
import { CATEGORIES } from "../data/dummy-data";
import React, { useState, useEffect } from "react";

export default function CategoryList(props) {
  const data = CATEGORIES;
  const handleCategoryClick = (categoryId, category) => {
    // navigate to the category screen
    props.navigation.navigate("MealList", { categoryId: categoryId, category });
  };
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateDimensions = () => {
      setScreenHeight(Dimensions.get("window").height);
      setScreenWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", updateDimensions);
    return () => {

    };
  }, []);
  return (
    <ScrollView>
      <View style={[styles.container, { minHeight: screenHeight }]}>
        <Image
          source={require("../assets/Header.png")}
          style={[
            styles.headerImage,
            { height: screenWidth > screenHeight ? 200 : 357 },
          ]}
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
            })}
            data={data}
            renderItem={({ item }) => (
              <ItemList
                category={item.title}
                color={item.color}
                onPress={() => handleCategoryClick(item.id, item.title)}
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
