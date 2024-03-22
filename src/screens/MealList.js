import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import MealListItem from "../components/MealListItem";
import { useSelector, useDispatch } from "react-redux";
import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import { toggleFavorite } from "../store/actions/meal";
export default function MealList(props) {
  const { categoryId, category } = props.route.params;

  // Function to handle meal click
  const handleMealClick = (id) => {
    // navigate to the meal detail screen
    console.log("Meal clicked", id);
    props.navigation.navigate("MealDetail", {
      mealId: id,
      category: category,
      categoryId: categoryId,
    });
  };

  // Function to handle favorite click
  const handleFavoriteClick = (mealId) => {
    // dispatch action to favorite meal
    console.log("Favorite clicked", mealId);
    toggleFavoriteHandler(mealId);
  };

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

  // Function to render meal list
  const renderMealList = (MealList) => {
    const FavoriteMEALS = useSelector((state) => state.meals.favoriteMeals);

    const isFavorite = (mealId) => {
      return FavoriteMEALS.some((meal) => meal.id === mealId);
    };

    return (
      <FlatList
        style={{
          width: "100%",
          borderRadius: 16,
        }}
        data={MealList}
        renderItem={({ item }) => (
          <MealListItem
            image={item.imageUrl}
            time={item.duration}
            name={item.title}
            complexity={item.complexity}
            category={getCategoryById(item.categoryIds)}
            onPress={() => handleMealClick(item.id)}
            onFavorite={() => handleFavoriteClick(item.id)}
            isFavorite={isFavorite(item.id)}
          />
        )}
        scrollEnabled={false}
      />
    );
  };

  // Function to render no meals message
  const renderNoMeals = () => {
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
          This category is empty
        </Text>
      </View>
    );
  };

  // Filtering meals by category
  const MealList = [];
  MEALS.forEach((meal) => {
    if (meal.categoryIds.includes(categoryId)) {
      MealList.push(meal);
    }
  });

  const dispatch = useDispatch();

  const toggleFavoriteHandler = (id) => {
    dispatch(toggleFavorite(id));
  }
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View>
        <ImageBackground
          source={require("../assets/Bread.png")}
          style={styles.headerImage}
        >
          <Pressable
            style={{ marginLeft: 20, marginTop: 50 }}
            onPress={() => props.navigation.navigate("CategoryList")}
          >
            <Ionicons name="arrow-back-circle" size={30} color="white" />
          </Pressable>
          <LinearGradient
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]}
            style={StyleSheet.create({
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              padding: 10,
              borderRadius: 8,
            })}
          >
            <Text
              style={{
                width: "100%",
                textAlign: "center",
                color: "white",
                fontSize: 30,
                fontWeight: "bold",
                marginBottom: 20,
              }}
            >
              {category}
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
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
          Meal List
        </Text>

        {MealList.length === 0
          ? renderNoMeals()
          : renderMealList(MealList, category)}
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
    flexDirection: "column",
    justifyContent: "space-between",
    resizeMode: "contain",
  },
});
