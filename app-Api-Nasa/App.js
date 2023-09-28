import { SafeAreaView, StyleSheet, View, Platform } from "react-native"; // Importa Platform
import Home from "./src/views/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Home />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,23,94,255)",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? 30 : 0, // Condiciona el paddingTop en función de la plataforma
  },
});