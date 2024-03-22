import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryList from "../screens/CategoryList";
import FavoriteMeal from "../screens/FavoriteMeal";
import MealDetail from "../screens/MealDetail";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealList from "../screens/MealList";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#F7A026" }}
    >
      <Tab.Screen
        name="CategoryList"
        component={CategoryList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteMeal"
        component={FavoriteMeal}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="MealList" component={MealList} />
        <Stack.Screen name="MealDetail" component={MealDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
