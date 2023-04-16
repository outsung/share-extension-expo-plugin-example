import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { StatusBar } from "expo-status-bar";
import { Platform, UIManager } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppNavigation } from "@navigation/App.navigation";
import { queryClient, queryClientPersister } from "@queryClient/index";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: queryClientPersister,
        dehydrateOptions: {
          shouldDehydrateQuery: (query) => {
            return (
              query.state.status === "success" &&
              query.queryKey.length > 0 &&
              typeof query.queryKey[0] === "string" &&
              query.queryKey[0] === "persist"
            );
          },
        },
      }}
    >
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <AppNavigation />
      </SafeAreaProvider>
    </PersistQueryClientProvider>
  );
}
