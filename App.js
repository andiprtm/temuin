import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Detail, Home, Login, Welcome } from './screens/index';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {socket} from "./config/socket";
import {useEffect} from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const headerStyle = {
    headerTitleStyle: { color: "black" },
    headerStyle: {
      backgroundColor: "#000000",
    },
    headerTintColor: "black",
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
                      name={"DetailScreen"}
                      component={Detail}
                      options={{
                          headerShown: false
                      }}
                  />
              </Stack.Navigator>

          </NavigationContainer>
      </SafeAreaProvider>
  )
}
