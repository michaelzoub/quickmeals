import { Image, StyleSheet, Platform, ScrollView } from 'react-native';
import tw from "tailwind-react-native-classnames"
import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAtom } from 'jotai';
import { recipeArrayAtom } from '../atoms/recipes';
import { Text } from 'react-native';

const fakeArray = [0,0,0,0,0,0,0]


export default function HomeScreen() {

  const [recipes] = useAtom(recipeArrayAtom);

  return (
      <View style={tw`flex flex-col h-full px-4 pt-2 bg-white`}>
        <View style={styles.titleContainer}>
          <ThemedText style={styles.title}>QuickMeals</ThemedText>
        </View>
        <ThemedView>
          <ScrollView style={styles.recipesContainer}>
          <ThemedText style={tw`text-xl font-semibold`}>Featured Recipes</ThemedText>
            {
              recipes.map((e) =>
                <View>
                  <Text>{e?.recipeName}</Text>
                  <Image src={e?.imageUrl}></Image>
                </View>
              )
            }
            <View style={ (recipes.length == 0) ? "" : ""  }>
              <Text style={styles.noRecipesText}>No recipes yet! Head to the camera tab to get started!</Text>
            </View>
          </ScrollView>
        </ThemedView>
      </View>
  );
}

const styles = StyleSheet.create({
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
  recipesContainer: {
    width: 'auto',
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 10

  },
  titleContainer: {
    marginBottom: 26,
    marginTop: 15
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: '500'
  },
  noRecipesText: {
    color: 'grey'
  }
});
