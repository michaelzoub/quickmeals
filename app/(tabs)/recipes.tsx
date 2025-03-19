import { StyleSheet, Image, Platform } from 'react-native';
import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { recipeArrayAtom } from '../atoms/recipes';
import { useAtom } from 'jotai';

export default function TabTwoScreen() {

  const [recipes, setRecipes] = useAtom(recipeArrayAtom);

  useEffect(() => {

  }, [])

  return (
    <View style={styles.container}>
      <View style={recipes ? styles.innerContainer : styles.innerContainerHidden}>
        <Text style={styles.warning}>No recipes yet.</Text>
        <Text>Go to the camera tab to get started.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    height: 'auto',
    width: 'auto',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  innerContainerHidden: {
    visibility: 'hidden'
  },
  warning: {
    fontSize: 24,
    fontWeight: '500'
  }
});
