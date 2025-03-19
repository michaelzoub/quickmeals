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

import { useRoute } from '@react-navigation/native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const route = useRoute();

  const [recipes, setRecipes] = useAtom(recipeArrayAtom);

  //here i get initial recipes and store as atom
  useEffect(() => {
    const recipes = getSessionStorageItem();
    setRecipes(recipes);
  }, []);

  const bgColors: Record<string, string> = {
    index: 'white',
    camera: 'blue',
    recipes: 'green',
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarActiveTintColor: 'lightgrey',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          paddingTop: 8,
          justifyContent: 'center',
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <HomeIcon props={color} />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <CameraSymbol props={color} ></CameraSymbol>,
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <CookingSymbol props={color} ></CookingSymbol>,
        }}
      />
    </Tabs>
  );
}
