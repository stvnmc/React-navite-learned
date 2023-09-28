import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import fecth from "../utils/fecth";
import { PostImage } from "../types";
import TodaysImage from "../components/TodaysImage";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fecth();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };
    loadTodaysImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Home;
