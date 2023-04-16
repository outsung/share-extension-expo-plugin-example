import { Text } from "react-native";

interface NavigationOptionHeaderTitleProps {
  headerTitle: string | React.ReactNode;
}
export function NavigationOptionHeaderTitle({
  headerTitle,
}: NavigationOptionHeaderTitleProps) {
  return () =>
    typeof headerTitle === "string" ? (
      <Text
        style={{ maxWidth: 200, fontSize: 16, fontWeight: "bold" }}
        numberOfLines={1}
        ellipsizeMode="middle"
      >
        {headerTitle}
      </Text>
    ) : (
      headerTitle
    );
}
