import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Platform, Text } from "react-native";

import { MainStackNavigationProps } from "@navigation/main";

import { NavigationOptionHeaderTitle } from "./NavigationOptionHeaderTitle";
import {
  NavigationOptionRightButtons,
  RightButton,
} from "./NavigationOptionRightButtons";

interface CreateBottomTabNavigationOptionsProps {
  // tabBarIcon: IconUnion;
  tabBarLabel: string;
  headerTitle: string | React.ReactNode;
  rightButtons?: RightButton[];
  headerTitleAlign?: "center" | "left";
}
export function createBottomTabNavigationOptions({
  // tabBarIcon,
  tabBarLabel,
  headerTitle,
  rightButtons,
  headerTitleAlign,
}: CreateBottomTabNavigationOptionsProps) {
  const getColor = (focused: boolean) => (focused ? "#202020" : "#C4C4C4");

  return ({
    navigation,
  }: {
    navigation: MainStackNavigationProps;
  }): BottomTabNavigationOptions => ({
    headerShadowVisible: false,
    tabBarIcon: ({ focused }) => (
      <></>
      // <Icon color={getColor(focused)} size={22} name={tabBarIcon} />
    ),
    tabBarLabel: ({ focused }) => {
      return (
        <Text
          style={{
            fontSize: 12,
            color: getColor(focused),
            paddingBottom: Platform.OS === "android" ? 4 : 0,
          }}
        >
          {tabBarLabel}
        </Text>
      );
    },
    headerTitleAlign,
    headerTitle: NavigationOptionHeaderTitle({ headerTitle }),
    headerRight: NavigationOptionRightButtons({
      navigation,
      rightButtons,
      paddingRight: 16,
    }),
  });
}
