import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./screens/home"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen
            name={"Home"}
            component={Home}
            options={{
              title: "Temuin",
              headerShown: false
            }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}
