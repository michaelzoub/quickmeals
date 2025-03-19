import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Text } from 'react-native';
import CameraSymbol from '@/components/ui/CameraSymbol';

import { HapticTab } from '@/components/HapticTab';
import HomeIcon from '@/components/ui/IconSymbol.ios';
import CookingSymbol from '@/components/ui/CookingSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { getSessionStorageItem } from '../utils/localStorage';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { recipeArrayAtom } from '../atoms/recipes';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [recipes, setRecipes] = useAtom(recipeArrayAtom);

  //here i get initial recipes and store as atom
  useEffect(() => {
    const recipes = getSessionStorageItem();
    setRecipes(recipes);
  }, [])

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <CameraSymbol></CameraSymbol>,
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <CookingSymbol></CookingSymbol>,
        }}
      />
    </Tabs>
  );
}
