import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import * as main from "@screens/main";

export type MainTabNavigationProps =
  BottomTabNavigationProp<MainTabNavigationParamsList>;
export type MainTabNavigationParamsList = {
  TodoListScreen: main.todo.TodoListScreenParams;
  StoreListScreen: main.store.StoreListScreenParams;
};

const Tab = createBottomTabNavigator<MainTabNavigationParamsList>();
export const MainTabNavigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
export function MainTabNavigation() {
  return (
    <Tab.Navigator initialRouteName="TodoListScreen">
      <Tab.Screen
        name="TodoListScreen"
        options={main.todo.TodoListScreenOptions}
        component={main.todo.TodoListScreen}
      />
      <Tab.Screen
        name="StoreListScreen"
        options={main.store.StoreListScreenOptions}
        component={main.store.StoreListScreen}
      />
    </Tab.Navigator>
  );
}
