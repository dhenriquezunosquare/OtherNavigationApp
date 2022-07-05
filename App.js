import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import UserScreen from './screens/UserScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Ionicons } from '@expo/vector-icons'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light"></StatusBar>
      <Tab.Navigator initialRouteName='Welcome' screenOptions={
        { headerStyle: { backgroundColor: '#3c0a6b' }, headerTintColor: 'white',tabBarActiveTintColor:'#3c0a6b' }
      } >
        <Tab.Screen name="Welcome" component={WelcomeScreen} options={
          { tabBarLabel: 'Welcome Screen', tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name="home" /> }
        } />
        <Tab.Screen name="User" component={UserScreen} options={
          { tabBarLabel: 'Welcome Screen', tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name="person" /> }
        } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
