import { View, Text } from "react-native";
import React from "react";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <View>
      <Text>restaurant-card.component</Text>
      <Text>{id}</Text>
      <Text>{imgUrl}</Text>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{genre}</Text>
      <Text>{address}</Text>
      <Text>{short_description}</Text>
      <Text>{dishes}</Text>
      <Text>{long}</Text>
      <Text>{lat}</Text>
    </View>
  );
};

export default RestaurantCard;
