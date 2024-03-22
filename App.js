import MainNavigation from "./src/navigation/MainNavigation";
import { createStore , combineReducers} from "redux";
import mealReducer from "./src/store/reducers/meal";
import { Provider } from "react-redux";
const store = createStore(combineReducers({
  meals: mealReducer,
}));
export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
