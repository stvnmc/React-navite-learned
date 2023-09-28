import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { format, sub } from "date-fns";

import Header from "../components/Header";
import fecthApi from "../utils/fecth";
import { PostImage } from "../types";
import TodaysImage from "../components/TodaysImage";
import LastFiveDaysImages from "../components/LastFiveDaysImage";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fecthApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };

    const loadLast5DaysImage = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), " yyyy-MM-dd");

        const lastFiveDaysImagesResponse = await fecthApi(
          `&start_date=${fiveDaysAgoDate.trim()}&end_date=${todaysDate.trim()}`
        );
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.log(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLast5DaysImage().catch(null);
  }, []);

  console.log(lastFiveDaysImages);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
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
