import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowDownRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../restaurant-card/restaurant-card.component";

const FeatureRow = ({
  id,
  title,
  description,
  featuredCategory = "featured",
}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowDownRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        className="pt-4"
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <RestaurantCard />
      </ScrollView>

      {/* <Text>{id}</Text>
      <Text>{featuredCategory}</Text> */}
    </View>
  );
};

export default FeatureRow;
