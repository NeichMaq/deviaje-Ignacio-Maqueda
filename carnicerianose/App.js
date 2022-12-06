import { useFonts } from "expo-font";
import BottomTabNavigator from "../algodeaplicacion/src/navigation/BottomTabNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway-Italic: require("../algodeaplicacion/src/assets/fonts/Raleway-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <BottomTabNavigator />;
}