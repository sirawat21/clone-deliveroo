import { View, Text } from "react-native";
import React from "react";

const FeatureRow = ({
  id,
  title,
  description,
  featuredCategory = "featured",
}) => {
  return (
    <View>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{featuredCategory}</Text>
    </View>
  );
};

export default FeatureRow;
