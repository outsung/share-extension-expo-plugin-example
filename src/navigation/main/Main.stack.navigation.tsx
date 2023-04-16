import { NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import * as main from "@screens/main";

import {
  MainTabNavigation,
  MainTabNavigationOptions,
  MainTabNavigationParamsList,
} from "./Main.tab.navigation";

export type MainStackNavigationProps =
  NativeStackNavigationProp<MainStackNavigationParamsList>;
export type MainStackNavigationParamsList = {
  MainTabNavigation: NavigatorScreenParams<MainTabNavigationParamsList>;

  TodoCreateScreen: main.todo.TodoCreateScreenParams;
};

const Stack = createNativeStackNavigator<MainStackNavigationParamsList>();
export function MainStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabNavigation"
        component={MainTabNavigation}
        options={MainTabNavigationOptions}
      />

      <Stack.Screen
        name="TodoCreateScreen"
        component={main.todo.TodoCreateScreen}
        options={main.todo.TodoCreateScreenOptions}
      />
    </Stack.Navigator>
  );
}
