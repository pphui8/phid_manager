import * as React from 'react';
import { Button, Text, View, StatusBar } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
import Blog from './pages/Blog';
import Comment from './pages/Comment';
import Server from './pages/Server';
import Setting from './pages/Setting';

const Tab = createBottomTabNavigator();

export default function App() {

  const [isNight, setNight] = React.useState(true);

  React.useState(() => {
    StatusBar.setBarStyle(isNight ? 'light-content' : 'dark-content', true);
    StatusBar.setBackgroundColor(isNight ? '#2e2e2e' : '#fff', true);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Blogs" component={Blog} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="blog" color={color} size={size} />
          ),
        }} isNight={isNight} />
        <Tab.Screen name="Comments" component={Comment} options={{
          headerStyle: {
            borderBottomWidth: 1,
            borderColor: '#000',
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="comment" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Server" component={Server} options={{
          headerStyle: {
            borderBottomWidth: 1,
            borderColor: '#000',
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="server" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Setting" options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="gear" color={color} size={size} />
          ),
        }} >{() => <Setting isNight={isNight} setNight={setNight} />}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}