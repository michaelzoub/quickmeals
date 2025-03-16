import { Image, StyleSheet, Platform, ScrollView } from 'react-native';
import tw from "tailwind-react-native-classnames"
import { View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const fakeArray = [0,0,0,0,0,0,0]


export default function HomeScreen() {
  return (
      <View style={tw`flex flex-col h-full px-2 bg-white`}>
        <View style={tw`m-2 rounded-lg shadow-inner p-10 bg-zinc-200`}>
          <ThemedText>Test</ThemedText>
        </View>
        <ThemedView>
          <ThemedText style={tw`text-xl font-semibold`}>Featured Recipes</ThemedText>
          <ScrollView style={{horizontal: true}}>
            {
              fakeArray.map((e) =>
                <ThemedText>test</ThemedText>
              )
            }
          </ScrollView>
        </ThemedView>
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
