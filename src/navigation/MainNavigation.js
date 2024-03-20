import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryList from "../screens/CategoryList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab () {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="CategoryList" component={CategoryList} />
        </Tab.Navigator>
    );
    
}

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="CategoryList" component={BottomTab} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
