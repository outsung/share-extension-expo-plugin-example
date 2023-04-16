import { SafeAreaView } from "react-native-safe-area-context";

import { TodoList } from "@components/todo";
import { createBottomTabNavigationOptions } from "@helpers/navigation";

export const TodoListScreenOptions = createBottomTabNavigationOptions({
  tabBarLabel: "할 일",
  headerTitle: "할 일",
});
export type TodoListScreenParams = undefined;
export function TodoListScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom", "left", "right"]}>
      <TodoList />
    </SafeAreaView>
  );
}
