import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "../category-card/category-card.component";

const Categroies = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 15,
      }}
    >
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Test"/>
    </ScrollView>
  );
};

export default Categroies;
