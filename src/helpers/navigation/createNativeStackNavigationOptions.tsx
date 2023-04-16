import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";

import { MainStackNavigationProps } from "@navigation/main";

import { NavigationOptionHeaderTitle } from "./NavigationOptionHeaderTitle";
import {
  NavigationOptionRightButtons,
  RightButton,
} from "./NavigationOptionRightButtons";

export type CreateNativeStackNavigationOptionsProps = {
  headerTitle: string | React.ReactNode;
  rightButtons?: RightButton[];
  headerShown?: boolean;
  paddingRight?: number;
};

export function createNativeStackNavigationOptions({
  headerTitle,
  rightButtons,
  headerShown,
  paddingRight,
}: CreateNativeStackNavigationOptionsProps) {
  return ({
    navigation,
  }: {
    navigation: MainStackNavigationProps;
  }): NativeStackNavigationOptions => ({
    headerBackVisible: false,
    headerShadowVisible: false,
    headerShown,
    headerLeft: ({ canGoBack }) =>
      canGoBack ? (
        <TouchableOpacity
          style={{ width: 32, height: 44, justifyContent: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Text>뒤로</Text>
        </TouchableOpacity>
      ) : null,
    headerRight: NavigationOptionRightButtons({
      navigation,
      rightButtons,
      paddingRight,
    }),
    headerTitle: NavigationOptionHeaderTitle({ headerTitle }),
  });
}
