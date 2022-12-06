import { useFonts } from "expo-font";
import BottomTabNavigator from "./src/navigation/BottomTabNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    RailwayItalic: require("./src/assets/fonts/RalewayItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <BottomTabNavigator />;
}