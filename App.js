import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex m-auto">
      <Text className="text-red-500">[@] Open up App.js to start working on your app.</Text>
      <StatusBar/>
    </View>
  );
}