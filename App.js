import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Detail, Home, Login, Welcome } from './screens/index';

const Stack = createNativeStackNavigator();

export default function App() {
  const headerStyle = {
    headerTitleStyle: { color: "white" },
    headerStyle: {
      backgroundColor: "#AA0002",
    },
    headerTintColor: "white",
  };

  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen
            name={"Welcome"}
            component={Welcome}
            options={{
              title: "Temuin",
              ...headerStyle,
            }}
        />
        <Stack.Screen
            name={"Login"}
            component={Login}
            options={{
              title: "Temuin",
              ...headerStyle,
              headerBackVisible:false
            }}
        />
        <Stack.Screen
            name={"Home"}
            component={Home}
            options={{
              title: "Temuin",
              ...headerStyle,
              headerBackVisible:false
            }}
        />
        <Stack.Screen
            name={"Detail"}
            component={Detail}
            options={{
              title: "Temuin",
              ...headerStyle,
            }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}
