import {
  RouteProp as _RouteProp,
  useRoute as _useRoute,
} from "@react-navigation/native";

export type RouteProp<O extends object> = _RouteProp<{ screen: O }, "screen">;
export const useRoute = <O extends object>() => {
  const { params } = _useRoute<RouteProp<O>>();
  if (!params) throw new Error("");
  return params;
};
