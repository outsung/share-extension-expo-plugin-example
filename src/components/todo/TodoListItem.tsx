import { Text, TouchableOpacity, View, ViewStyle } from "react-native";

import { CheckBox } from "@components/common";

import { TodoEntity } from "./todo.types";

interface TodoListItemProps extends Omit<TodoListItemUIProps, "children"> {
  todo: TodoEntity;
  onDelete: () => void;
}
export function TodoListItem({ todo, onDelete, ...props }: TodoListItemProps) {
  return (
    <TodoListItemUI {...props}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox value={todo.checked} style={{ marginRight: 12 }} />
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            {todo.contents}
          </Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
          <Text style={{ fontSize: 32 }}>❌</Text>
        </TouchableOpacity>
      </View>
    </TodoListItemUI>
  );
}

interface TodoListItemUIProps {
  children: React.ReactNode | React.ReactNode[];
  onPress?: () => void;
  style?: ViewStyle;
}
export function TodoListItemUI({
  children,
  onPress,
  style,
}: TodoListItemUIProps) {
  const disabled = !onPress;
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={[
          {
            borderRadius: 5,
            backgroundColor: disabled ? "#e8e8e8" : "#FFFFFF",
            flexDirection: "row",
            alignItems: "center",
            padding: 16,
          },
          style,
        ]}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}
