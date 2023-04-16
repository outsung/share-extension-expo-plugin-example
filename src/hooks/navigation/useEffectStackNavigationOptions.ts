import { useEffect } from "react";

import {
  createNativeStackNavigationOptions,
  CreateNativeStackNavigationOptionsProps,
} from "@helpers/navigation";
import { MainStackNavigationProps } from "@navigation/main";

import { useNavigation } from "./useNavigation";

export function useEffectStackNavigationOptions(
  effect: (
    setter: (props: CreateNativeStackNavigationOptionsProps) => void
  ) => void | (() => void),
  deps: React.DependencyList | undefined,
  _navigation?: MainStackNavigationProps
) {
  const navigation = useNavigation();

  const setOptions = (props: CreateNativeStackNavigationOptionsProps) => {
    const option = createNativeStackNavigationOptions(props)({
      navigation: _navigation || navigation,
    });
    (_navigation || navigation).setOptions(option);
  };

  useEffect(() => {
    const destructor = effect(setOptions);
    return destructor;
  }, [setOptions, ...(deps || [])]);
}
