import { Text, TextProps, TouchableOpacity, View } from "react-native";

import { MainStackNavigationProps } from "@navigation/main";

export type RightButton = {
  onPress?: (navigation: MainStackNavigationProps) => void;
  anchorRef?: React.RefObject<TouchableOpacity>;
} & { label: string; labelProps?: Partial<TextProps> }; // | { icon: IconUnion; iconProps?: Partial<IconProps> }

interface NavigationOptionRightButtonsProps {
  navigation: MainStackNavigationProps;
  rightButtons?: RightButton[];
  paddingRight?: number;
}
export function NavigationOptionRightButtons({
  navigation,
  rightButtons,
  paddingRight,
}: NavigationOptionRightButtonsProps) {
  return rightButtons
    ? () => (
        <View style={{ flexDirection: "row", paddingRight }}>
          {rightButtons.map((rightButton, index) => (
            <TouchableOpacity
              key={index}
              ref={rightButton.anchorRef}
              disabled={!rightButton.onPress}
              onPress={() =>
                rightButton.onPress && rightButton.onPress(navigation)
              }
            >
              <Text {...rightButton.labelProps}>{rightButton.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )
    : undefined;
}
