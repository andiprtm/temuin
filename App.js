import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Detail, Home, Login, Welcome } from './screens/index';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {socket} from "./config/socket";
import {useEffect} from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const headerStyle = {
    headerTitleStyle: { color: "white" },
    headerStyle: {
      backgroundColor: "#AA0002",
    },
    headerTintColor: "white",
  };

  useEffect(() => {
    socket.connect()
  }, []);

  return (
      <SafeAreaProvider>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen
                      name={"Welcome"}
                      component={Welcome}
                      options={{
                          headerShown: false
                      }}
                  />
                  <Stack.Screen
                      name={"Login"}
                      component={Login}
                      options={{
                          headerShown: false
                      }}
                  />
                  <Stack.Screen
                      name={"Home"}
                      component={Home}
                      options={{
                          headerShown: false
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
      </SafeAreaProvider>
  )
}
