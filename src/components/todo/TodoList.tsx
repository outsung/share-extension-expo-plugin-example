import { LayoutAnimation, ScrollView, Text } from "react-native";

import { useNavigation } from "@hooks/navigation";
import { useGlobalState } from "@hooks/queries/common";

import { TodoListItem, TodoListItemUI } from "./TodoListItem";
import { TodoEntity } from "./todo.types";

export function TodoList() {
  const [todoList, setTodoList] = useGlobalState<TodoEntity[]>(
    ["todoList"],
    []
  );
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 32 }}
    >
      <TodoListItemUI onPress={() => navigation.navigate("TodoCreateScreen")}>
        <Text>추가하기</Text>
      </TodoListItemUI>

      {todoList?.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onDelete={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut
            );

            setTodoList(todoList.filter((t) => todo.id !== t.id));
          }}
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut
            );

            setTodoList(
              todoList
                .map((t) =>
                  todo.id === t.id ? { ...t, checked: !t.checked } : t
                )
                .sort((a, b) => Number(a.checked) - Number(b.checked))
            );
          }}
          style={{ marginTop: 16 }}
        />
      ))}
    </ScrollView>
  );
}
