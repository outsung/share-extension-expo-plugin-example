import { Text, View } from "react-native";

import { createBottomTabNavigationOptions } from "@helpers/navigation";

export const StoreListScreenOptions = createBottomTabNavigationOptions({
  tabBarLabel: "저장소",
  headerTitle: "저장소",
});
export type StoreListScreenParams = undefined;
export function StoreListScreen() {
  return (
    <View>
      <Text>저장소</Text>
    </View>
  );
}
