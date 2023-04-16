import { ViewStyle, View, Text } from "react-native";

interface CheckBoxProps {
  value: boolean;
  style?: ViewStyle;
}
export function CheckBox({ value, style }: CheckBoxProps) {
  return (
    <View style={style}>
      {value ? (
        <View
          style={{
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40 }}>🌰</Text>
        </View>
      ) : (
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 40,
            borderWidth: 1,
            borderColor: "#CDCDCD",
            backgroundColor: "#f5f5f5",
          }}
        />
      )}
    </View>
  );
}
