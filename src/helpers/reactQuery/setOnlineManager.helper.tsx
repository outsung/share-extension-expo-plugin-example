import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "@tanstack/react-query";

import { queryClient } from "@queryClient/index";

export function setOnlineManager() {
  onlineManager.setEventListener((setOnline) =>
    NetInfo.addEventListener((networkState) => {
      const isOnline = Boolean(networkState.isConnected);
      isOnline && queryClient.invalidateQueries(["getExpoPushToken"]);
      setOnline(isOnline);
    })
  );
}
