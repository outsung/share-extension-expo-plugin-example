import { QueryClient } from "@tanstack/react-query";

import { createMMVKPersister } from "./createMMVKPersister";

export const queryClient = new QueryClient({
  defaultOptions: { mutations: { retry: false } },
});

export const queryClientPersister = createMMVKPersister();
