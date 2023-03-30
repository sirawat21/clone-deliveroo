import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
      <Image className="h-20 w-20 rounded" source={{ uri: imgUrl }} />
    </TouchableOpacity>
  );
};

export default CategoryCard;
