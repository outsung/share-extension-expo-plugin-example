import { useNavigation as _useNavigation } from "@react-navigation/native";

import { MainStackNavigationProps } from "@navigation/main";

export const useNavigation = () => _useNavigation<MainStackNavigationProps>();
