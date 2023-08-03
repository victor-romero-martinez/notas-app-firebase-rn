import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import NotasScreen from "./screen/NotasScreen";
import CreateNotaScreen from "./screen/CreateNotaScreen";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="NotasScreen"
      screenOptions={{
        tabBarPressColor: "#232323",
        tabBarIndicatorStyle: { backgroundColor: "#232323" },
      }}
    >
      <Tab.Screen
        name="NotasScreen"
        component={NotasScreen}
        options={{
          title: "Notas",
        }}
      />
      <Tab.Screen
        name="CreateScreen"
        component={CreateNotaScreen}
        options={{
          title: "Crear nota",
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <MyTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
}
