import { Tabs } from 'expo-router';
import { Text } from 'react-native';

function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return (
    <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.6 }}>
      {emoji}
    </Text>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1a4d3a',
        tabBarInactiveTintColor: '#666',
        headerStyle: {
          backgroundColor: '#1a4d3a',
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#e0e0e0',
          paddingTop: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: -4,
          marginBottom: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ focused }) => <TabIcon emoji="📰" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="reflect"
        options={{
          title: 'Reflect',
          tabBarIcon: ({ focused }) => <TabIcon emoji="✍️" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="apprenticeship"
        options={{
          title: 'Apprentice',
          tabBarIcon: ({ focused }) => <TabIcon emoji="👷" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="career-path"
        options={{
          title: 'Career',
          tabBarIcon: ({ focused }) => <TabIcon emoji="📈" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="mentor"
        options={{
          title: 'Mentor',
          tabBarIcon: ({ focused }) => <TabIcon emoji="🧑‍🏫" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
