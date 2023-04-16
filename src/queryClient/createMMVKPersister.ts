import {
  PersistedClient,
  Persister,
} from "@tanstack/react-query-persist-client";
import { MMKV } from "react-native-mmkv";

export const mmkvStorage = new MMKV();

export function createMMVKPersister(idbValidKey = "reactQuery") {
  return {
    persistClient: (client: PersistedClient) => {
      mmkvStorage.set(idbValidKey, JSON.stringify(client));
    },
    restoreClient: () => {
      const stringPersistedClient = mmkvStorage.getString(idbValidKey);

      return stringPersistedClient
        ? (JSON.parse(stringPersistedClient) as PersistedClient)
        : null;
    },
    removeClient: () => {
      mmkvStorage.delete(idbValidKey);
    },
  } as Persister;
}
