import { useState, useCallback } from "react";
import { View, Button, TextInput, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { v4 } from "uuid";

import { useGlobalState } from "@hooks/queries/common";

import { TodoListItemUI } from "./TodoListItem";
import { TodoEntity } from "./todo.types";

export function TodoCreateForm() {
  const [contents, setContents] = useState("");
  const [todoList, setTodoList] = useGlobalState<TodoEntity[]>(
    ["todoList"],
    []
  );

  const onCreate = useCallback(() => {
    setTodoList([
      ...(todoList || []),
      { checked: false, contents, id: String(Date.now()) },
    ]);
  }, [contents]);

  return (
    <SafeAreaView
      edges={["bottom", "left", "right"]}
      style={{ paddingHorizontal: 16, paddingTop: 32 }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "#d2d2d2",
          borderRadius: 5,
          paddingVertical: 12,
          paddingHorizontal: 8,
          marginBottom: 16,
          backgroundColor: "#FFFFFF",
        }}
      >
        <TextInput
          style={{ fontSize: 16 }}
          value={contents}
          onChangeText={setContents}
        />
      </View>

      <TodoListItemUI onPress={contents ? onCreate : undefined}>
        <Text>생성</Text>
      </TodoListItemUI>
    </SafeAreaView>
  );
}
