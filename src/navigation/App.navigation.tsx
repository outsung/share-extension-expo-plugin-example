import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { MainStackNavigation, mainNavigationRef } from "./main";

export function AppNavigation() {
  return (
    <NavigationContainer ref={mainNavigationRef}>
      <MainStackNavigation />
    </NavigationContainer>
  );
}
