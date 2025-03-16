import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Text } from 'react-native';
import CameraSymbol from '@/components/ui/CameraSymbol';
import tw from 'tailwind-react-native-classnames';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import CookingSymbol from '@/components/ui/CookingSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
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
          title: 'Recipes',
          tabBarIcon: ({ color }) => <CookingSymbol></CookingSymbol>,
        }}
      />
    </Tabs>
  );
}
