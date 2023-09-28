import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

import { PostImage } from "../types";

const TodaysImage: FC<PostImage> = ({ date, title, url }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <Text>{title}</Text>
      <Text>{date}</Text>
      <Button title="View" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
  },
});

export default TodaysImage;
