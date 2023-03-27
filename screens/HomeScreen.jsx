import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, Image } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <Text className="text-red-500"></Text>
      {/* Header */}
      <View>
        <Image
          source={{
            url: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
