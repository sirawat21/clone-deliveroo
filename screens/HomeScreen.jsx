import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="flex m-auto">
      <Text className="text-red-500">
        [@] Open up App.js to start working on your app.
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
