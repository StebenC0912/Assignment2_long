import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import FavoriteMealItem from "../components/FavoriteMealItem";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meal";
function renderFavoriteMealList(FavoriteMealList, toggleFavoriteHandler) {
  return (
    <FlatList
      style={{
        width: "100%",
        borderRadius: 16,
      }}
      data={FavoriteMealList}
      renderItem={({ item }) => (
        <FavoriteMealItem
          image={item.imageUrl}
          time={item.duration}
          name={item.title}
          complexity={item.complexity}
          category={getCategoryById(item.categoryIds)}
          onPress={() => toggleFavoriteHandler(item.id)}
        />
      )}
      scrollEnabled={false}
    />
  );
}

// Function to get category by ID
const getCategoryById = (categoryIds) => {
  // return array of categories
  // log the finding result
  const mealCategories = [];
  categoryIds.forEach((categoryId) => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId);
    if (category) {
      mealCategories.push(category.title);
    }
  });
  return mealCategories;
};
function renderNoFavoriteMeals() {
  return (
    <View
      style={StyleSheet.create({
        marginTop: 60,
      })}
    >
      <Image source={require("../assets/empty.png")} />
      <Text
        style={StyleSheet.create({
          color: "#F7A026",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 16,
        })}
      >
        Your list is empty
      </Text>
    </View>
  );
}

export default function FavoriteMeal() {
  const FavoriteMEALS = useSelector((state) => state.meals.favoriteMeals);
  const FavoriteMealList = FavoriteMEALS;
  const dispatch = useDispatch();
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image source={require("../assets/ok.png")} style={styles.headerImage} />
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignContent: "space-between",
          alignItems: "center",
          borderRadius: 20,
          backgroundColor: "white",
          marginTop: -10,
        }}
      >
        <Text
          style={{
            paddingTop: 20,
            fontSize: 22,
            fontWeight: "semibold",
          }}
        >
          Favorite Meal
        </Text>

        {FavoriteMealList.length === 0
          ? renderNoFavoriteMeals()
          : renderFavoriteMealList(FavoriteMealList, toggleFavoriteHandler)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
    flexGrow: 1,
  },
  headerImage: {
    width: "100%",
    height: 357,
  },
});
