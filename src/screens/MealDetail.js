import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Tag from "../components/Tag";
import Instructions from "../components/Instruction";
import { MEALS } from "../data/dummy-data";
export default function MealDetail(props) {
  const { mealId, category, categoryId } = props.route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const attribute = [];
  if (meal.isGlutenFree) {
    attribute.push("Gluten Free");
  }
  if (meal.isVegan) {
    attribute.push("Vegan");
  }
  if (meal.isVegetarian) {
    attribute.push("Vegetarian");
  }
  if (meal.isLactoseFree) {
    attribute.push("Lactose Free");
  }

  return (
    <ScrollView
      style={StyleSheet.create({
        backgroundColor: "white",
      })}
    >
      <View>
        <ImageBackground
          source={{
            uri: meal.imageUrl,
          }}
          style={styles.headerImage}
        >
          <Pressable
            style={{ marginLeft: 20, marginTop: 50 }}
            onPress={() => {
              if (category == null && categoryId == null) {
                props.navigation.navigate("FavoriteMeal");
              } else {
                props.navigation.navigate("MealList", {
                  category: category,
                  categoryId: categoryId,
                });
              }
            }}
          >
            <Ionicons name="arrow-back-circle" size={36} color="white" />
          </Pressable>
        </ImageBackground>
      </View>

      <Text
        style={{
          width: "100%",
          textAlign: "center",
          color: "#F7A026",
          fontSize: 30,
          fontWeight: "bold",
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
      >
        {meal.title}
      </Text>

      <View
        style={StyleSheet.create({
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        })}
      >
        <Ionicons name="time-outline" size={30} color="#9C9C9C" />
        <Text style={styles.text}>{meal.duration} mins</Text>
        <Ionicons name="leaf-outline" size={30} color="#9C9C9C" />
        <Text style={styles.text}>{meal.ingredients.length} ingredients</Text>
      </View>
      <FlatList
        data={attribute}
        renderItem={({ item }) => <Tag tagName={item} />}
        style={StyleSheet.create({
          width: "100%",
          marginBottom: 10,
          paddingHorizontal: 10,
        })}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
      <Text style={styles.textHeader}>Ingredients</Text>
      {meal.ingredients.map((ingredient, index) => (
        <Text
          key={index}
          style={StyleSheet.create({
            textAlign: "center",
            fontSize: 14,
            padding: 7,
            color: "#393939",
          })}
        >
          {ingredient}
        </Text>
      ))}
      <Text style={styles.textHeader}>Instructions</Text>
      <FlatList
        data={meal.steps}
        renderItem={({ item, index }) => (
          <Instructions index={index} step={item} />
        )}
        scrollEnabled={false}
      />
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
  textHeader: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
    fontWeight: "500",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#9C9C9C",
  },
});
